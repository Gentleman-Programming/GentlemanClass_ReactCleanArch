import { ApiUser } from '@/models';
import { RickAndMortyAdapter } from '../adapter';

export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/2';

export const fetchMorty = async (url: string) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => RickAndMortyAdapter(res));
};
