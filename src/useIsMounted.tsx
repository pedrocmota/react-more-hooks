import {useCallback, useEffect, useRef} from 'react'

const useIsMounted = () => {
  const isMountedRef = useRef(true)
  const isMounted = useCallback(() => isMountedRef.current, [])

  useEffect(() => {
    return () => void (isMountedRef.current = false)
  }, [])

  return isMounted
}

export default useIsMounted
