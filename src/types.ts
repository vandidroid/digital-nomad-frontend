export type CountryType = {id: number, name: string};

export type LocationType = {
  id: number,
  name: string,
  country: {
    id: number,
    name: string
  }
}

/*
export interface CountryType {
      id: number
    , name: string
};
*/