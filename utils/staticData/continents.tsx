import { IContinent } from 'typescript/interfaces/pickableItems_interfaces';

const continents: IContinent[] = [
    {
        name: 'Africa',
        bgImage: '/africa.jpeg',
        inactive: true,
        id: 1,
        step: 'IContinent',
        nextStep: 'ICountry',
    },
    {
        name: 'Asia',
        bgImage: '/asia.jpeg',
        id: 2,
        step: 'IContinent',
        nextStep: 'ICountry',
    },
    {
        name: 'America',
        bgImage: '/america.jpeg',
        inactive: true,
        id: 3,
        step: 'IContinent',
        nextStep: 'ICountry',
    },
    {
        name: 'Europe',
        bgImage: '/europe.jpeg',
        inactive: true,
        id: 4,
        step: 'IContinent',
        nextStep: 'ICountry',
    },
    {
        name: 'Australia',
        bgImage: '/australia.jpeg',
        inactive: true,
        id: 5,
        step: 'IContinent',
        nextStep: 'ICountry',
    },
];

export { continents };
