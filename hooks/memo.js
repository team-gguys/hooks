import React from 'react'
import { memo } from 'react'
import isEqual from 'react-fast-compare'


const customMemo = (Component) => {
    return memo(Component, isEqual)
}


export default customMemo
