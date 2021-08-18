
import axios from "axios";

const getRandomQuestionsFromCountry = async (params:object) => {
    try {
        return await axios
          .post<string>(
            `${process.env.NEXT_PUBLIC_BACKEND}/questions/random`,
            params
          )
        //   .then((response: any) => setQuestions(response?.data))
        //   .then(() => {
        //     setTimeout(() => {
        //       setPanel("ActivitiesPanel");
        //     }, 1000);
        //   });
      } catch (err) {
        if (err) console.log(err);
      }
}

export {
    getRandomQuestionsFromCountry
}