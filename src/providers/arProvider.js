import { useState, createContext} from 'react'

export const ARContext = createContext(null)

const ARProvider = ({ children }) => {

   const [ar, setAR] = useState({
        currentCity: {},
        cityTextures: [],
        currentTexture: 0,
        firstClick: false,
        showStartImage: true,
        viewingOverlay: true
   })

   return (
       <ARContext.Provider
           value={[ar, setAR]}
       >
           {children}
       </ARContext.Provider>
   )
}

export default ARProvider