export type ICountry = {
  name: string
  capital: string
  region: string
  population: number
  subregion: string
}

export const getCountries = (): Promise<ICountry[]> =>
  new Promise((res, rej) =>{

    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((result: any) => {
      let countries: ICountry[] = [];
      for (let i=0;i<result.length;i++) {
        let {name, capital, region, population, subregion} = result[i];
        countries.push({name, capital, region, population, subregion})
      }
      res(countries)
    })
    .catch(rej);
})