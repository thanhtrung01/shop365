import { createContext, useState } from 'react'

interface AppContextInterface {
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const getInitialAppContext: () => AppContextInterface = () => ({
  menu: true,
  setMenu: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode; defaultValue?: AppContextInterface }) => {
  const [menu, setMenu] = useState<boolean>(initialAppContext.menu)
  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
