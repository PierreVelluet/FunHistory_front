import { atom } from 'recoil';

const initState: boolean = true;
const loadingState = atom({
    key: 'LoadingState',
    default: initState,
});

export { loadingState };
