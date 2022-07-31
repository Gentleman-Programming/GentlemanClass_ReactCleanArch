interface UserAssociatedUrl {
  name: string;
  url: string;
}

export interface ApiUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: UserAssociatedUrl;
  location: UserAssociatedUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
}

export const UserEmptyState: User = {
  id: 0,
  name: '',
  status: '',
  species: ''
};
