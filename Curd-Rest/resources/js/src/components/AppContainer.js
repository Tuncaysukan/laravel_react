import React from 'react'

export default function AppContainer({ title, children }) {
    return (
        <div>
            <>
                <div className="container">
                    <div className="card">
                        <div className="card-header text-center ">
                            
                            {title}
                         </div>   
                            <div className="card-body">

                                {children }
                            </div>
                        </div>
                        
                    </div>
               
            </>
        </div>
    )
}
