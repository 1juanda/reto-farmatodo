import { APIRequestContext, expect } from '@playwright/test';


export class PokemonService {
  private baseURL = 'https://pokeapi.co/api/v2';

  constructor(private request: APIRequestContext) {}
  
  async getPokemon(name: string) {
    const response = await this.request.get(
        `${this.baseURL}/pokemon/${name.toLowerCase()}`
    );
    expect(response.status()).toBe(200);
    return response.json();
  }

  async getEvolutionChain(name: string): Promise<string[]> {
    const pokemon = await this.getPokemon(name);
    const speciesResponse = await this.request.get(pokemon.species.url);
    const species = await speciesResponse.json();
    const evolutionResponse = await this.request.get(
      species.evolution_chain.url
    );
    const evolutionData = await evolutionResponse.json();
    return this.extractChain(evolutionData.chain);
  }

  private extractChain(chain: any): string[] {
    const result: string[] = [];
    let current = chain;
    while (current) {
      result.push(current.species.name);
      current = current.evolves_to?.[0];
    }
    return result;
  }

  async getPokemonsWithWeight(names: string[]) {
    const result: { name: string; weight: number }[] = [];
    for (const name of names) {
      const data = await this.getPokemon(name);
      result.push({
        name: data.name,
        weight: data.weight,
      });
    }
    return result;
  }
}