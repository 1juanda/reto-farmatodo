import { test } from '@playwright/test';
import { PokemonService } from '../src/api/services/pokemon.service';
import { sortAlphabetically } from '../src/api/utils/sort.util';
import { Pokemon } from '../src/api/data/pokemon.data';

for (const pokemon of Pokemon) {
    test(`${pokemon.namePokemon} evolution chain sorted alphabetically with weight`, async ({
    request,
    }) => {
    const service = new PokemonService(request);
    const evolutions = await service.getEvolutionChain(pokemon.namePokemon);
    const pokemons = await service.getPokemonsWithWeight(evolutions);
    const sorted = sortAlphabetically(pokemons);
    for (const p of sorted) {
        console.log(`${p.name} - ${p.weight}`);
        }
    });
}