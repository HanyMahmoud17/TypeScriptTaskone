class Stack<type>{

    items:type[];

    constructor(){
        this.items=[]
    }
    add(item:type){
        this.items.push(item)
    }
    po(item:type){
        this.items.pop()
    }
    spli(item:type){
        this.items.splice(1,1)
    }
    len(item:type){
        this.items.length
    }
    display(){
       this.items.forEach(element => {
        console.log(element);
        
       });
    }
}

let st=new Stack<number>();
st.add(10)

st.add(20)
st.add(30)
st.display()
