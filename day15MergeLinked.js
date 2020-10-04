/*
Given two sorted linked lists, merge them together in ascending order 
and return a reference to the merged list 

Ex: Given the following lists...

list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
*/

class LinkedList {
    constructor(value) {
        (this.head = {
            value: value,
            next: null,
        }),
            (this.tail = this.head);
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
        };
        //end on to the end of the list for the previous end
        this.tail.next = newNode;

        //it's the new last node, so it becomes the new tail
        this.tail = newNode;

        //inc counter
        this.length++;
    }

    printList() {
        let array = [];
        //start at the head
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const mergeLinked = (list1, list2) => {
    //combine the 2 lists
    let newList = list1.concat(list2);
    //sort the lists
    newList.sort();
    console.log(newList);
    let LIST = new LinkedList(newList[0]);
    for (let i = 1; i < newList.length; i++) {
        LIST.append(newList[i]);
    }
    LIST.printList();
    console.log(LIST);
};

mergeLinked([1, 3, 5], [2, 4, 6, null]);

//algoexpoert version
function mergeLinkedLists(list1, list2) {
    console.log(list1, list2);
    // Write your code here.
    let pointer1 = list1.head;
    let pointer2 = list2.head;
    let placeHolder = null;

    while (pointer1 !== null && pointer2 !== null) {
        if (pointer1.value < pointer2.value) {
            placeHolder = pointer1;
            pointer1 = pointer1.next;
        } else {
            if (placeHolder !== null) placeHolder.next = pointer2;
            placeHolder = pointer2;
            pointer2 = pointer2.next;
            placeHolder.next = pointer1;
        }
    }

    if (pointer1 === null) {
        placeHolder.next = pointer2;
    }
    if (list1.value < list2.value) {
        console.log(list1);
        return list1;
    } else {
        console.log(list2);
        return list2;
    }
}

const list1 = new LinkedList(2);
list1.append(6);
list1.append(7);
list1.append(8);
const list2 = new LinkedList(1);
list2.append(3);
list2.append(4);
list2.append(5);
list2.append(9);
list2.append(10);

mergeLinkedLists(list1, list2);
