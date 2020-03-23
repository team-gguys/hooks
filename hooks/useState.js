import React, { useCallback, useState } from 'react';


const useCustomState = (initialState) => {
    const [state, set] = useState(initialState);
    const setState = useCallback((newState) => {
        if (typeof newState === 'function') {
            set((prevState) => {
                const state = newState(prevState)
                return {
                    ...prevState,
                    ...state,
                }
            })
        } else {
            set((prevState) => {
                return {
                    ...prevState,
                    ...newState,
                }
            })
        }
    }, [set]);

    return [state, setState];
};


export default useCustomState;
