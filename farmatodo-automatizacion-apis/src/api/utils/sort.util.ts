import { Pokemon } from '../models/pokemon.model';

export function sortAlphabetically(arr: Pokemon[]): Pokemon[] {
  const data = [...arr];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j].name > data[j + 1].name) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}