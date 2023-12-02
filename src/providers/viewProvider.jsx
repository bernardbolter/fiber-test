import { useState, createContext} from 'react'

export const ViewContext = createContext(null)

const ViewProvider = ({ children }) => {

   const [ar, setAR] = useState({
       image: false,
       currentCity: {},
       cityTextures: []
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