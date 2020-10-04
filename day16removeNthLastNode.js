/*
Given a linked list and a value n, remove the nth to last node and return the resulting list. 

Ex: Given the following linked lists...

1->2->3->null, n = 1, return 1->2->null
1->2->3->null, n = 2, return 1->3->null
1->2->3->null, n = 3, return 2->3->null
*/

//traverse to find the value

//rearrange pointers at that value

class Node {
    constructor(value) {
        const Node = {
            value: value,
            next: null,
        };
        return Node;
    }
}

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
        let newNode = new Node(value);

        this.tail.next = newNode;

        this.tail = newNode;

        this.length++;
    }
}

const removeNthFromEnd = (list, n) => {
    counter = 0;
    pointer1 = list.head;
    pointer2 = list.head;

    //put the second pointer to N nodes ahead, so we can get the value before the actual node later
    while (counter < n) {
        pointer2 = pointer2.next;
        counter++;
    }

    //if the value to be deleted is the head node
    //edge case we have to take care of
    if (pointer2 === null) {
        //update the head of the list ot have the valye of the following node
        //update the next value to point to the next next value
        //overwrites the head node & points to 2 nodes after
        list.head.value = list.head.next.value;
        list.head.next = list.head.next.next;
        console.log(list);
        return list;
    }
    //first pointer points to the value 1 before the 1 to be deleted
    //That way we can easily delete it
    //second pointer stops right before null
    while (pointer2.next !== null) {
        pointer2 = pointer2.next;
        pointer1 = pointer1.next;
    }
    //overwrite the middle node
    pointer1.next = pointer1.next.next;
    console.log(list);
    return list;
};

//for repittion
const removeFromEnd = (list, n) => {
    console.log(list);
    let p1 = list.head;
    let p2 = list.head;
    let counter = 0;

    while (counter < n) {
        p2 = p2.next;
        counter++;
    }

    //move everything forward so that p1 is one before the removal value
    while (p2.next != null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = p1.next.next;
    list.length--;
    console.log(list);
};

let list = new LinkedList(5);
list.append(7);
list.append(13);
list.append(21);
list.append(28);

removeFromEnd(list, 2);
