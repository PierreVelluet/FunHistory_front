import { atom, selector } from 'recoil';

type panelName = {
    [key: string]: string;
};

const nextPanel: panelName = {
    continents: 'countries',
    countries: 'themes',
    themes: 'difficulties',
    difficulties: 'QuizzPanel',
};

const settingsState = atom({
    key: 'stepsState',
    default: {
        panel: 'continents',
        continents: '',
        country: '',
        theme: '',
        difficulty: {},
    },
});

const settingsStateSelector = selector({
    key: 'StepsSelector',
    get: ({ get }) => get(settingsState),
    set: ({ set, get }, newValue) => {
        const currentPanel: string = get(settingsState).panel;
        const newState = {
            ...get(settingsState),
            [currentPanel]: newValue,
            panel: nextPanel?.[currentPanel],
        };
        set(settingsState, newState);
    },
});

export { settingsStateSelector };
