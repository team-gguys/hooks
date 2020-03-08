import React, { useRef } from 'react'
import isEqual from 'react-fast-compare'


const useDeepMemoize = (value) => {
    const ref = useRef();

    if (!isEqual(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}


export default useDeepMemoize
