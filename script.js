class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
    }
    peek() {
        return this.items[this.frontIndex]
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
let queue = new Queue();
document.addEventListener('click', (e) => {
    let eleId = e.target.id;
    if (eleId == 's1') {
        s1.style.backgroundColor = '#7e0707';
        queue.enqueue('s1');
    }
    if (eleId == 's2') {
        s2.style.backgroundColor = '#7e0707';
        queue.enqueue('s2');
    }
    if (eleId == 's3') {
        s3.style.backgroundColor = '#7e0707';
        queue.enqueue('s3');
    }
    if (eleId == 's4') {
        s4.style.backgroundColor = '#7e0707';
        queue.enqueue('s4');
    }
    if (eleId == 's5') {
        s5.style.backgroundColor = '#7e0707';
        queue.enqueue('s5');
    }
    if (eleId == 's6') {
        s6.style.backgroundColor = '#7e0707';
        queue.enqueue('s6');
    }
    if (eleId == 's7') {
        s7.style.backgroundColor = '#7e0707';
        queue.enqueue('s7');
    }
    if (eleId == 's8') {
        s8.style.backgroundColor = '#7e0707';
        queue.enqueue('s8');
    }
    if (eleId == 's9') {
        let delay = 500;
        while (!queue.isEmpty() && queue.peek() != undefined) {
            let s = document.getElementById(queue.peek());
            setTimeout(() => {s.style.backgroundColor = '#111195'},delay);
            queue.dequeue();
            delay += 500;
        }
    }
})
