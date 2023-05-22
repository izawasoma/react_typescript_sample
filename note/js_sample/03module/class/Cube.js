export class Cube{
    constructor(height,width,depth){
        this._height = height;
        this._width = width;
        this._depth = depth;
    }

    getVolume = () => {
        return this._width * this._height * this._depth;
    }

    isCube = () => {
        if(this._depth === this._height && this._height === this._width){
            return true;
        }
        else{
            return false;
        }
    }
}