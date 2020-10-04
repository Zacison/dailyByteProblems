/* Given a non-empty linked list, return the middle node of the list. 
If the linked list contains an even number of elements, return the node closer to the end. 

1->2->3->null, return 2
1->2->3->4->null, return 3
1->null, return 1 */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = {
            value: value,
            next: null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    appendAll(values) {
        for (let value of values) {
            this.append(value);
        }
    }
}

const findMiddleEl = (list) => {
    let node = list.head;
    let length = 0;

    //find length by looping
    while (node != null) {
        length++;
        node = node.next;
    }

    //get middle element index
    //default to ceiling value if not divisible
    //if it's even, add one to the length
    if (length % 2 == 0) {
        length++;
    }
    length = Math.ceil(length / 2);
    node = list.head;

    console.log(length);

    //find element
    for (let i = 1; i <= length; i++) {
        if (i == length) {
            console.log(node.value);
            return node.value;
        }
        node = node.next;
    }
};

//official solution
const findMiddleEl2 = (list) => {
    let node = list.head;
    let length = 0;

    //find length by looping
    while (node != null) {
        length++;
        node = node.next;
    }

    let dummyNode = list.head;
    for (let i = 1; i < length / 2; i++) {
        dummyNode = dummyNode.next;
    }
    console.log(dummyNode.value);
    return list;
};

let list = new LinkedList(1);
list.appendAll([2, 3, 4, 5, 6, 7]);
findMiddleEl2(list);
