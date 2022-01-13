import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

export default function Seed(){
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.SEED,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
            }}
        >
        🥑
        </div>
    )
}
