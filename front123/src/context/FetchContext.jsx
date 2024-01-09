import { createContext, useEffect, useState } from 'react'
export const FetchContext = createContext()
const FetchProvider = ({children}) => {
    const [api, setApi] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000") 
    .then((res)=>res.json())
    .then(data=>setApi(data))
  }, [])
  


  return (
    <FetchContext.Provider value={{api}}>
    {children}
    </FetchContext.Provider>
  )
}

export default FetchProvider