import { atom, selector } from 'recoil';
import { IQuizzState } from 'typescript/interfaces/general_interfaces';

const quizzState = atom<IQuizzState>({
    key: 'QuizzState',
    default: { questions: [], currentQuestionNumber: 0, questionsState: [] },
});

const quizzStateSelector = selector<IQuizzState>({
    key: 'QuizzStateSelector',
    get: ({ get }) => get(quizzState),
    set: ({ set, get }, newValue) => {
        const values = Object.entries(newValue);
        const newState = {
            ...get(quizzState),
            [values[0][0]]: values[0][1],
        };
        set(quizzState, newState);
    },
});

export { quizzStateSelector };
