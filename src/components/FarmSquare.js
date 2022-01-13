import React from 'react'
import { ItemTypes } from './Constants'
import Farm from './Farm'
import { moveSeed } from './Game'
import {useDrop} from 'react-dnd'

// for drop event
export default function FarmSquare({x, y, children}){
    const brown = (x + y) % 2 === 1
    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.SEED,
        drop: () => moveSeed(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [x,y])

    return (
        <div
            ref={drop}
            style={{
                postion: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            <Farm brown={brown}>{children}</Farm>
            {isOver && (
                <div
                    style={{
                        position: 'relative',
                        top: "-5vh",
                        left: 0,
                        bottom: 0,
                        right: 0,
                        height: '5vh',
                        width: '5vh',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                >
                </div>
            )}
        </div>
    )
}