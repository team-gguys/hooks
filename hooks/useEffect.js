import React from 'react'
import isEqual from 'react-fast-compare'
import { useCustomCompareEffect, useMount } from 'react-use'


const useCustomEffect = (effect, deps = []) => {
    if (deps.length === 0) {
        useMount(effect)
    } else {
        useCustomCompareEffect(effect, deps, isEqual)
    }
}


export default useCustomEffect
