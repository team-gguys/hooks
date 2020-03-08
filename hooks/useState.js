import React, { useCallback, useState } from 'react';


const useCustomState = (initialState) => {
    const [state, set] = useState(initialState);
    const setState = useCallback((...newState) => {
        set((prevState) => ({
            ...prevState,
            ...newState,
        }))
    }, [set]);

    return [state, setState];
};


export default useCustomState;
