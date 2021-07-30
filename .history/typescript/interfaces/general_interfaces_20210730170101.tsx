
  export interface ICountry {
      name: string;
    capital: string;
    language: string;
    completed: number;
    imagePath: string;
    government: string;
    leader: string;
    area: string;
    population: string;
    timeZone: string;
    quiz: arr;
    bgImage: string;
  }

  government: req.body.government,
  leader: req.body.leader,
  area: req.body.area,
  population: req.body.population,
  timeZone: req.body.timeZone,
  quiz: req.body.quiz,
  bgImage: req.body.bgImage