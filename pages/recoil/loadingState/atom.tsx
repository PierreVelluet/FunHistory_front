import { atom } from 'recoil'

const loadingState = atom({
    key: 'LoadingState',
    default: true,
})

export { loadingState }
