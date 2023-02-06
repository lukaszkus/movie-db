export type Movie = {
  backdrop: string;
  id: number;
  original_title: string;
  overview: string;
  popularisty: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  realease_data: string;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
