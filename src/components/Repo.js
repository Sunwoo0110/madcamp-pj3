import React from 'react'
import Seed from './Seed'
import FarmSquare from './FarmSquare'
import {moveSeed, canMoveSeed} from './Game'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useDrop} from 'react-dnd'

function renderRepo(i, repoPosition) {

    const x = 0
    const y = i % 3

    return (
        <div key={i} style ={{width: '5vh', height: '5vh'}} >
            <FarmSquare x={x} y={y}>
                {renderPiece(x, y, repoPosition)}
            </FarmSquare>
        </div>
    )
}

function renderPiece(x, y, [seedX, seedY]){
    if(x === seedX && y === seedY) {
        return <Seed />
    }
}

// SEED 저장소
export default function Repo(repoPosition) {
    const repo = []

    for (let i = 0; i <3; i++) {
        repo.push(renderRepo(i, repoPosition))
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    backgroundColor: 'whitesmoke',
                    width: '5vh',
                    height: '5vh',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {repo}
            </div>
        </DndProvider>
    )
}
