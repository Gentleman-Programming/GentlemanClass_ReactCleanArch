import { ApiUser, User } from '@/models';

export const RickAndMortyAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species
  };
};
