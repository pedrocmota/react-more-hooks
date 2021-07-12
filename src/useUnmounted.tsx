import {useEffect} from 'react'

const useUnmonted = (func: React.EffectCallback) => {
  useEffect(() => {
    return () => void func()
  }, [])
}

export default useUnmonted