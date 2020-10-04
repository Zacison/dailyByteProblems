/*Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list. 

//Ex: Given the following linked lists and values...

1->2->3->null, value = 3, return 1->2->null
8->1->1->4->12->null, value = 1, return 8->4->12->null
7->12->2->9->null, value = 7, return 12->2->9->null */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        let newNode = {
            value: val,
            next: null,
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    /*
    //my solution
    remove(val) {
        let node = this.head;

        while (node.next.next != null) {
            //head node
            if (val == node.value) {
                this.head = node.next;
                this.length--;
            } //normal case
            if (node.next.value == val && node.next.next != null) {
                //console.log('Found it ' + val + ' ' + node.next.value);
                node.next = node.next.next;
                this.length--;
            } //last node
            else if (
                node.next.next.value == val &&
                node.next.next.next == null
            ) {
                node.next.next = null;
                break;
            }
            node = node.next;
        }

        //console.log(this.head);
        //console.log(this.length);
    }
    */
    remove(value) {
        const curNode = this.head;

        //first node
        if (curNode.value == value) {
            curNode = curNode.next;
        }
        //other nodes including last node
        while (curNode != null) {
            if (curNode.next != null && curNode.next.value == value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

let list = new LinkedList(7);
list.append(5);
list.append(7);
list.append(7);
list.append(7);
list.append(13);
list.append(7);
list.append(21);
list.append(7);
list.append(28);
list.append(7);
//list.remove(28);

const removeVal = (list, value) => {
    let node = list.head;

    //check for first node
    if (node.value == value) {
        console.log(node.value);
        node = node.next;
    }

    while (node != null) {
        //Does the next node = the value?
        if (node.next != null && node.next.value == value) {
            //point the current node to skip over the next node, point to 2 nodes ahead
            //this deletes the node 1 ahead with the value
            node.next = node.next.next;
            list.length--;
        } else {
            //iterate through
            node = node.next;
        }
    }

    console.log(list);
    return list;
};

removeVal(list, 7);
