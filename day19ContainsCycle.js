/**
 * Given a linked list, containing unique numbers, return whether or not it has a cycle. 
Note: a cycle is a circular arrangement (i.e. one node points back to a previous node) 

Ex: Given the following linked lists...

1->2->3->1 -> true (3 points back to 1)
1->2->3 -> false
1->1 true (1 points to itself)
 */

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

    appendAll(list) {
        for (let el of list) {
            this.append(el);
        }
    }
}

let list = new LinkedList(1);
list.appendAll([2, 3, 4, 5, 6, 7]);
//console.log(list);

//not actually correct, this only works if there are 2 values with the same value
//We need to make sure it actually loops & that it points to a previously occuring value
const containsCycle = (list) => {
    //for each element, put the value in a map
    let node = list.head;
    let prevEls = {};

    while (node != null) {
        //if the node doesnt exist in object, create it
        if (!prevEls[node.value]) {
            prevEls[node.value] = true;
        } //if it does, return the value
        else {
            console.log(node.value);
            console.log('True');
            return true;
        }

        //increment node
        node = node.next;
    }
    console.log('false');
    return false;
};

//containsCycle(list);

//works with the solution
const secondCycle = (list) => {
    //list.tail.next = list.head;
    let p1 = list.head;
    let p2 = list.head;
    //works because of the loop
    //one moves by 1, one moves by 2
    //eventually they meet at the same number
    while (p2 != null && p2.next != null) {
        p1 = p1.next;
        p2 = p2.next.next;

        if (p1.value == p2.value) {
            console.log(p1.value);
            return true;
        }
    }
    console.log(false);
    return false;
};

secondCycle(list);
