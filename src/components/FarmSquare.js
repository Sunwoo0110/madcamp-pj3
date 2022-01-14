import React from 'react'
import { ItemTypes } from './Constants'
import Farm from './Farm'
import { moveSeed, sowSeed } from './Game'
import {useDrop} from 'react-dnd'

// for drop event
// children -> x, y 로 이동
export default function FarmSquare({x, y, children}){
    const brown = x<4 ? 2 : (x==5 ? 3 : 0)
    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.SEED,
        drop: () => moveSeed(x, y),
        //drop: () => sowSeed(x, y), // repo 에서 씨 뿌리기
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
            <Farm color={brown}>{children}</Farm>
            {isOver && (x !== 4) && (
                <div
                    style={{
                        position: 'relative',
                        top: "-10vh",
                        left: 0,
                        bottom: 0,
                        right: 0,
                        height: '10vh',
                        width: '10vh',
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