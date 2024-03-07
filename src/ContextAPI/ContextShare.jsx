import React, { createContext, useState } from 'react'
export const addCourseResponseContext = createContext()



function ContextShare({children}) {

     const [addCourseResponse,setAddCourseResponse ] = useState("")
   

  return (
    <>    <addCourseResponseContext.Provider value={{addCourseResponse,setAddCourseResponse}}>
      
        {children}
      
        </addCourseResponseContext.Provider>
    </>

  )
  }

export default ContextShare