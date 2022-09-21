export interface IPlayers {
  content: IPlayer[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageable;
  size: number;
  sort: ISort;
  totalElements: number;
  totalPages: number;
}

export interface ITeam {
  country: string;
  id: number;
  lastRankingPosition: number;
  lastRatingValue: number;
  lastResults: string[];
  logo: string;
  name: string;
  rankingPosition: number;
  rating: [];
  ratingValue: number;
  winRatio: number;
}

export interface IPlayer {
  birthYear: number;
  bodyshot: string;
  country: string;
  id: number;
  lastRatingValue: number;
  name: string;
  nick: string;
  photo: string;
  rankingPosition: number;
  rating: [];
  ratingValue: number;
  surname: string;
  team: ITeam;
}

export interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: ISort;
  unpaged: boolean;
}

export interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IQueryParams {
  countryCode: string | undefined;
  maxBornYear: number | undefined;
  minBornYear: number | undefined;
  page: number;
  searchBy: string | undefined;
  size: number | undefined;
  sort: string | undefined;
  sortDir: string | undefined;
}
