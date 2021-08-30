import { atom } from 'recoil'

const stepsState = atom({
    key: 'stepsState',
    default: {
        continents: "",
        country: "",
        theme: "",
        difficulty: {}
    },
})

export { stepsState }
