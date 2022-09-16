// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides(){
        return this.count
    }
    get perimeter(){
        let sum = 0
        for (let i = 0; i < this.count; i++) {
            sum += this.sides[i];
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (
            this.sides[0] + this.sides[1] > this.sides[2] &&
            this.sides[1] + this.sides[2] > this.sides[0] &&
            this.sides[0] + this.sides[2] > this.sides[1]
        )
        { return true }
        else return false
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2])
        { return true }
        else return false
    }
    
    get area(){
        if (this.count == 4) {
            return this.sides[0] * this.sides[0]
        }
    }
}