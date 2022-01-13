let seedPostion = [0,0]
let observer = null

function emitChange(){
    observer(seedPostion)
}

export function observe(o) {
    if(observer){
        throw new Error('error')
    }
    observer = o
    emitChange()
}

export function moveSeed(toX, toY){
    seedPostion = [toX, toY]
    emitChange()
}

// 지금은 chess knight 조건, 추후 이미 씨앗이 있거나 작물 재배중일때로 변경하기~
export function canMoveSeed(toX, toY) {
    const [x, y] = seedPostion
    const dx = toX - x
    const dy = toY - y
    
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}