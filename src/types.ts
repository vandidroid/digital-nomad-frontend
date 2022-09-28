export type MenuProps = { items: { title: string; path: string }[] };

export type CountryType = {
  id: number;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  population: number;
  area: number;
  flag: string;
};

export type LocationType = {
  id: number;
  name: string;
  population: number;
  area: number;
  coverImage: string;
  country: CountryType;
};

export enum SortDirection {
  ASC = 1,
  DESC = -1,
}

export type SortType = {
  criteria: string;
  direction: SortDirection;
};
