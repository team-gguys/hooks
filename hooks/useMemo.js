import React, { useMemo } from 'react'
import useDeepMemoize from './useDeepMemoize'


const useCustomMemo = (factory, dependencies) => {
  return useMemo(factory, useDeepMemoize(dependencies));
}


export default useCustomMemo;
