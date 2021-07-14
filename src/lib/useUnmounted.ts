import {useEffect} from 'react'

export const useUnmonted = (func: React.EffectCallback) => {
  useEffect(() => {
    return () => void func()
  }, [])
}

export default useUnmonted