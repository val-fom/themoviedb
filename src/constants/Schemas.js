import { schema } from 'normalizr';

const genre = new schema.Entity('genres');

genre.define({ genres: [genre] });

export const genreSchema = genre;
