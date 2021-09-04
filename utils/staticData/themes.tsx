import { ITheme } from 'typescript/interfaces/pickableItems_interfaces';

const themes: ITheme[] = [
    {
        name: 'History',
        bgImage: '/history.jpeg',
        id: 1,
        step: 'ITheme',
        nextStep: 'IDifficulty',
    },
    {
        name: 'Geography',
        bgImage: '/geography.jpeg',
        inactive: true,
        id: 2,
        step: 'ITheme',
        nextStep: 'IDifficulty',
    },
    {
        name: 'Politic',
        bgImage: '/politic.jpeg',
        inactive: true,
        id: 3,
        step: 'ITheme',
        nextStep: 'IDifficulty',
    },
    {
        name: 'Culture',
        bgImage: '/culture.jpg',
        inactive: true,
        id: 4,
        step: 'ITheme',
        nextStep: 'IDifficulty',
    },
];

export { themes };
