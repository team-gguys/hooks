import React, { useEffect } from 'react'
import isEqual from 'react-fast-compare'
import { useCustomCompareEffect } from 'react-use'


const useCustomEffect = (effect, deps = []) => {
    if (deps.length === 0) {
        useEffect(effect, [])
    } else {
        useCustomCompareEffect(effect, deps, isEqual)
    }
}


export default useCustomEffect
