import { useState, createContext} from 'react'

export const ViewContext = createContext(null)

const ViewProvider = ({ children }) => {

   const [ar, setAR] = useState({
        currentCity: {},
        cityTextures: [],
        currentTexture: 0
   })

   return (
       <ViewContext.Provider
           value={[ar, setAR]}
       >
           {children}
       </ViewContext.Provider>
   )
}

export default ViewProvider