import React, { useState } from 'react'



export const loginContext = React.createContext()

export default function LoginContextProvider(props){
    
    const [loginModal, setLoginModal] = useState(false)
    const [register, setRegister] = useState(false)
    const [submitLoginDetails, setSubmitLoginDetails] = useState(false)
    const [submitRegistrationDetails, setSubmitRegistrationDetails] = useState(false)

    const loginVariable = { loginModal, setLoginModal, register, setRegister,
                            submitLoginDetails, setSubmitLoginDetails,
                            submitRegistrationDetails, setSubmitRegistrationDetails }

    return(
        <loginContext.Provider value={loginVariable}>
            {props.children}
        </loginContext.Provider>
    )
}