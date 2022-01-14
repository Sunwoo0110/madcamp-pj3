import React from 'react'

export default function Farm({ color, children }) {
    const fill = ['white', 'green', 'brown', "gray"][color]
    //const stroke = ['brown', 'green', 'red'][color]
    
    return (
        <div 
            style={{
                backgroundColor: fill,
                //color: stroke,
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
    
}