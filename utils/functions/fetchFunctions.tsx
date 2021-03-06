import axios from "axios";

import { IFetchResult } from "typescript/interfaces/general_interfaces";

const getRandomQuestionsFromCountry = async (params: object) => {
  try {
    return await axios.post<IFetchResult>(
      `${process.env.NEXT_PUBLIC_BACKEND}/questions/random`,
      params
    );
  } catch (err) {
    if (err) console.log(err);
  }
};
const getAllCountries = async () => {
  try {
    return await axios.get<string>(
      `${process.env.NEXT_PUBLIC_BACKEND}/countries`
    );
  } catch (err) {
    if (err) console.log(err);
  }
};

const getAllCountriesByContinent = async (continent: string) => {
  try {
    return await axios.get<string>(
      `${process.env.NEXT_PUBLIC_BACKEND}/countries/continent/${continent}`
    );
  } catch (err) {
    if (err) console.log(err);
  }
};

export {
  getRandomQuestionsFromCountry,
  getAllCountries,
  getAllCountriesByContinent,
};
