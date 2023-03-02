import { PostStateInterface } from '../types/postState.interface';

export const initialState: PostStateInterface = {
  posts: [
    {
      id: 1,
      title: 'spider Man',
      description: 'Spider man is a hero',
    },
    {
      id: 2,
      title: 'iron man ',
      description: 'iron man is the captain of the marvels ',
    },
  ],
};
