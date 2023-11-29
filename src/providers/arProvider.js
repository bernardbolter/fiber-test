import { useState, createContext} from 'react'

export const ARContext = createContext(null)

const ARProvider = ({ children }) => {

   const [ar, setAR] = useState({
       image: 'start',
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