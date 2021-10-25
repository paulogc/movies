import type { Movie } from "../movies/types";

export interface PlaylistMovie extends Movie {
  confirmed: boolean;
}
