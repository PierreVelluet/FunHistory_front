import { IDifficulty } from 'typescript/interfaces/pickableItems_interfaces';

const difficulties: IDifficulty[] = [
    {
        name: 'Easy',
        id: 1,
        timeout: 20,
        bgImage: '/easy.jpeg',
        step: 'IDifficulty',
        nextStep: 'QuizzPanel',
    },
    {
        name: 'Moderate',
        id: 2,
        timeout: 15,
        bgImage: '/moderate.jpeg',
        step: 'IDifficulty',
        nextStep: 'QuizzPanel',
    },
    {
        name: 'Hard',
        id: 3,
        timeout: 10,
        bgImage: '/hard.jpeg',
        step: 'IDifficulty',
        nextStep: 'QuizzPanel',
    },
    {
        name: 'Insane',
        id: 4,
        timeout: 5,
        bgImage: '/insane.jpeg',
        step: 'IDifficulty',
        nextStep: 'QuizzPanel',
        inactive: true,
    },
];

export { difficulties };
