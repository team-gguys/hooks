import React from 'react'
import isEqual from 'react-fast-compare'
import { useCustomCompareEffect } from 'react-use'


const useCustomEffect = (effect, deps) => {
    useCustomCompareEffect(effect, deps, isEqual)
}


export default useCustomEffect
