import axios from "axios";

const getRandomQuestionsFromCountry = async (params: object) => {
  try {
    return await axios.post<string>(
      `${process.env.NEXT_PUBLIC_BACKEND}/questions/random`,
      params
    );
  } catch (err) {
    if (err) console.log(err);
  }
};

export { getRandomQuestionsFromCountry };
