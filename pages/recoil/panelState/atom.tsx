import { atom } from 'recoil'

const panelName = atom({
    key: 'PanelName',
    default: 'Continents',
})

export { panelName }
