import React, { useCallback, useRef, useLayoutEffect } from 'react'


const useCustomCallback = (fn) => {
    let ref = useRef()

    useLayoutEffect(() => {
        ref.current = fn
    })

    return useCallback((...args) => (0, ref.current)(...args), [])
}


export default useCustomCallback
