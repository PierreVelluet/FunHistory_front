export interface ICountry {
    name: string
    'native country name': string
    greeting: string
    capital: string
    language: string
    government: string
    leader: string
    area: number
    population: number
    density: number
    timeZone: string
    establishment: string
    'gross domestic product per capita': number
    flagImage: string
}

export interface ISettings {
    [key: string] : string | object
    panel: string;
    continents: string;
    country: string;
    theme: string;
    difficulty: object;
}

export interface IQuizzState {
    questions: object;
    currentQuestionNumber: number;
    questionsState: IQuestionState[];
}

export interface IFetchResult {
    success: boolean
    results: IQuestion[]
}

export interface IActivity {
    name: string
    backgroundImage: string
    active: boolean
    number: number
}

export interface ISingleOrMultipleChoicesAnswer {
    answer: string
    answerNumber: number
    correct: boolean
}

export interface IQuestion {
    country: string
    question: string
    answers: []
    type: string
    correctAnswerImage: string
    explanation: string
    ressourceLink: string
    category: string
}

export interface IQuestionState {
    number: number
    state: 'success' | 'fail' | 'current' | 'upcoming'
}

export interface IDifficulty {
    name: string
    difficultyNumber: number
    timeout: number
    backgroundImage: string
}
