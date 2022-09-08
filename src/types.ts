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
  country: CountryType;
};

/*
export interface CountryType {
      id: number
    , name: string
};
*/
