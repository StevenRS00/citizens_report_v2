import React from 'react'
import '../css/TopWelcome.css';

export default function TopWelcome() {
    return (
        <div className="topCard text-center">
            <section className="text-light WelcomeCard1">
                <h1> Welcome to Citizens Report </h1>
                <h3 className="p-2"> From us, for you. </h3>
                <p className="text-muted"> Available now </p> 
                
                <form action="/login">
                    <button className="btn btn-primary">Log in</button>
                </form>
                
                <span className="text-muted largeFont">or</span>
                
                <form action="/register">
                    <button className="btn btn-primary">Register</button>
                </form>
            </section>
        </div>
    )
}
