import { SPRITE_SIZE } from '../../config/const'


//MAIN ACTOR CLASS ALL ACTORS EXTEND TO GET SIZE AND METHODS
export class Actor {                            
    constructor(x, y, isStatic){
        this.size = {
            width: SPRITE_SIZE,
            height: SPRITE_SIZE
        }
        this.position = [ y, x ]
        this.isStatic = isStatic
        this.type = ''
        this.moveActor = () => {
            console.log('moved')
        }
    }
}

export class RockTemp extends Actor {
    constructor(x, y, isStatic){
        super(x, y, isStatic);
        this.position = [ y, x ]
        this.isStatic = isStatic        
        this.background = '#BDC3C7'
    }
}//ad dispatch to store method???