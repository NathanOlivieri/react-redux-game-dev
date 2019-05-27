import { SPRITE_SIZE } from '../../config/const'

export class Actor {
    constructor(x, y, isStatic){
        this.size = {
            width: SPRITE_SIZE,
            height: SPRITE_SIZE
        }
        this.position = [ y, x ]
        this.isStatic = isStatic
        this.moveActor = () => {
            console.log('moved')
        }
    }
}

export class RockTemp extends Actor {
    constructor(){
        super();
        this.isStatic = true
        this.position = [SPRITE_SIZE, SPRITE_SIZE]
        this.background = '#fafafa'
    }
}