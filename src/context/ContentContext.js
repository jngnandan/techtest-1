import {createContext, useState} from 'react'

const ContentContext = createContext();

const ContentProvider = ({children}) => {
    const [colorMode, setColorMode] = useState('Normal')

return(
    <ContentContext.Provider value={{colorMode}}>
        {children}
    </ContentContext.Provider>
)

}

export {ContentContext, ContentProvider}