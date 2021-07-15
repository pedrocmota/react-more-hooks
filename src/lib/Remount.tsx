import React, {useState, useCallback, useContext, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

interface IRemountContext {
  remount: () => void
}

interface IRemount {
  children: JSX.Element
}

const RemountContext = createContext<IRemountContext>({} as IRemountContext)

export const useRemount = () => useContext(RemountContext)

export const Remount: React.FunctionComponent<IRemount> = (props) => {
  const [key, setKey] = useState(uuidv4())
  const remount = useCallback(() => {
    setKey(uuidv4())
  }, [])
  const Children = () =>
    React.Children.map(props.children as any, child =>
      React.cloneElement(child, {
        key: key
      })
    )
  return (
    <RemountContext.Provider value={{remount}}>
      <Children/>
    </RemountContext.Provider>
  )
}