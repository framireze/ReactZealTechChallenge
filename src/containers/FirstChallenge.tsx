import { getGifts } from "utils"

//import React from 'react'

export const FirstChallenge = () => {
    let gifts = getGifts();
    return (
        <>
            <h1>First Challenge</h1>
            <pre>{JSON.stringify(gifts,null,3)}</pre>
        </>    
    )
}
