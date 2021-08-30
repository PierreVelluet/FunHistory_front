import generalAtom from './generic/atom'
import { selector } from 'recoil'

// const setLoadingSelector = selector({
//     key: 'SetLoading',
//     get: ({get}) => get(generalAtom) * 100,
//     // set: ({set}, newValue) =>
//     //   set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),
//   });
const setLoadingSelector = selector({
    key: 'SetLoading',
    get: ({get}) => get(generalAtom),
    set: ({ set, get }, newLoadingState) => 
        set(generalAtom, { ...get(generalAtom), loading: newLoadingState })
    
});

export default setLoadingSelector
