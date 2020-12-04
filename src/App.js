import React from 'react'
import { Route } from 'react-router-dom'
import { FAQ } from './FAQ'
import { Home } from './Home'

export const App = () => {
    const user = "Bryan"
    return (
        <>
            <Route path="/faq">
                <FAQ />
            </Route>
            <Route exact path="/">
                <Home user={user} />
            </Route>
        </>
    )
}