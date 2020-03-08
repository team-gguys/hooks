import customMemo from './hooks/memo'
import useCustomCallback from './hooks/useCallback'
import useCustomEffect from './hooks/useEffect'
import useCustomMemo from './hooks/useMemo'
import useCustomState from './hooks/useState'

export const memo = customMemo
export const useCallback = useCustomCallback
export const useEffect = useCustomEffect
export const useMemo = useCustomMemo
export const useState = useCustomState


export default {
    memo: memo,
    useCallback: useCallback,
    useEffect: useEffect,
    useMemo: useMemo,
    useState: useState,
}
