class Stack {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    po(item) {
        this.items.pop();
    }
    spli(item) {
        this.items.splice(1, 1);
    }
    len(item) {
        this.items.length;
    }
    display() {
        this.items.forEach(element => {
            console.log(element);
        });
    }
}
let st = new Stack();
st.add(10);
st.add(20);
st.add(30);
st.display();
