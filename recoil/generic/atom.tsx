import { atom } from 'recoil'

const generalAtom = atom({
    key: "generalState",
    default: {
        loading: true,
        currentPanel: 'QuizzPanel',
    }
})

export default generalAtom
