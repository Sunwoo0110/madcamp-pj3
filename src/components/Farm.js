import React from 'react'

export default function Farm({ brown, children }) {
    const fill = brown ? 'brown' : 'green'
    const stroke = brown? 'green' : 'brown'
    
    return (
        <div 
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
    
}