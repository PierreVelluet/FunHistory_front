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

export { getRandomQuestionsFromCountry };
