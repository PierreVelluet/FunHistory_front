import { atom, selector } from 'recoil';
import { ISettings } from 'typescript/interfaces/general_interfaces';

type panelName = {
    [key: string]: string;
};

const nextPanel: panelName = {
    continents: 'countries',
    countries: 'themes',
    themes: 'difficulties',
    difficulties: 'QuizzPanel',
};

const settingsState = atom<ISettings>({
    key: 'SettingsState',
    default: {
        panel: 'QuizzPanel',
        continents: 'Asia',
        country: 'Japan',
        theme: 'History',
        difficulty: {
            name: 'Hard',
            id: 3,
            timeout: 10,
            bgImage: '/hard.jpeg',
            step: 'IDifficulty',
            nextStep: 'QuizzPanel',
        },
    },
});

const settingsStateSelector = selector<ISettings>({
    key: 'SettingsStateSelector',
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
