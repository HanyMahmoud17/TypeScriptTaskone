"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    // implementation
    constructor(wid, hig) {
        this.width = wid;
        this.hight = hig;
    }
    // CalcCircumference(){
    //     console.log(`circumferece is : ${2*this.width+2*this.hight}`);
    // }
    CalcCircumference() {
        return 2 * (this.width + this.hight);
    }
    static WhoAmI() {
        console.log("I am rectangle");
    }
}
exports.Rectangle = Rectangle;
// var res:Rectangle=new Rectangle(2,2)
// var x=res.CalcCircumference();
// console.log(x);
// Rectangle.WhoAmI();
// class Square extends Rectangle{
//     constructor(side:number){
//         super(side,side);
//     }
//     CalcCircumference():number{
//         return 4*this.width;
//     }
//     static WhoAmI(){
//         console.log("I am square");
//     }
// }
// var sq:Square=new Square(2);
// var x:number=sq.CalcCircumference();
// console.log(x);
// Square.WhoAmI();
