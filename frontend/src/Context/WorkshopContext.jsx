import React, { createContext } from "react";
import all_workshop from '../Components/Asset/Data/all_workshop'

export const WorkshopContext = createContext(null)

const WorkshopContextProvider = (props) => {

    const contextValue = {all_workshop}

    return (
        <WorkshopContext.Provider value={contextValue}>
            {props.children}
        </WorkshopContext.Provider>
    )
}

export default WorkshopContextProvider