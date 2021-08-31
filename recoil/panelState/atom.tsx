import { atom } from 'recoil'

const panelName = atom({
    key: 'PanelName',
    default: 'continents',
})

export { panelName }
