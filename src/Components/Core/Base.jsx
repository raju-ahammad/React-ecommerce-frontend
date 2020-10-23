import React from 'react'

const Base = ({title="myTitle", description="my description", className="bg-dark text-white p-4", children}) => {
    return (
        <>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4 text-center"> {title} </h2>
                    <p className="lead"> {description} </p>
                </div>
                <div className={className}> {children} </div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>If you got any question contact our mail</h4>
                    <button className="btn-lg btn-warning btn">Contact Us</button>
                    <div className="container">
                        <span className="text-muted">
                            An amazing django react app
                        </span>
                    </div>
                </div>
            </footer>
        </>
        
    )
}

export default Base
