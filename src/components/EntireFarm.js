import React from 'react'
import Farm from './Farm'
import Seed from './Seed'
import {moveSeed, canMoveSeed} from './Game'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import FarmSquare from './FarmSquare'

const storeSeed = []; // 이미 놓아진 seed

function renderFarm(i, seedPosition){
    
    const x = i % 6; 
    const y = Math.floor(i/4);

    //const isSeedHere = x === seedPosition[0] && y === seedPosition[1]
    //const brown = (x+y) % 2 === 1
    //const piece = isSeedHere ? <Seed /> : null
    
    //onClick={()=> handleFarmClick(x, y)} // click event (not drag-drop)
    return (
        <div key={i} style={{width: '10vh', height: '10vh'}} >
            <FarmSquare x={x} y={y}>
                {renderPiece(x, y, seedPosition)}
            </FarmSquare>
        </div>
    )
}

function renderPiece(x, y, [seedX, seedY]){
    if(x === seedX && y === seedY) {
        storeSeed.push([x, y])
        return <Seed x = {x} y = {y}/>
    } else {
        if (x === 5 && y === 1) return <Seed />
    }
}

function handleFarmClick(toX, toY) {
    //if(canMoveSeed(toX, toY)){
        moveSeed(toX, toY)
   // }
}

export default function EntireFarm({seedPosition}) {
    const farms = []

    for (let i = 0; i < 24; i++) {
        farms.push(renderFarm(i, seedPosition))
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '60vh',
                    height: '40vh',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {farms}
            </div>
        </DndProvider>
    )
}