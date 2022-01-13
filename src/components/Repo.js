import React from 'react'

// SEED 저장소
export default function Repo({ white, children}) {
    const fill = white

    return (
        <div
            style={{
                backgroundColor: fill,
                width: '5vh',
                height: '5vh'
            }}
        >
            {children}
        </div>
    )
}
