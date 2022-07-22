//4.Create a class called CustomList with these methods:
   // insertFirst(data)
   // insertLast(data)
   // getFirst()
    //getLast()
    ​
    let CustomList = class {
      insertFirst(data)
      {
      };
      insertLast(data) 
      { 
      };
      getFirst() 
      { 
      };
      getLast ()
       { 
      };
    }
    class Node {
      constructor(data, next = null) {
       this.data = data;
       this.next = next;
      }
    }class LinkedList {
      constructor() {
        this.head = null;
      }
      insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
      }
      insertLast(data) {
        const last = this.getLast();
        if (last) {
         last.next = new Node(data);
        } else {
          this.head = new Node(data);
        }
       }
      getFirst() {
        return this.head.data;
      }
      getLast() {
        if (!this.head) {
          return null;
        }
        let node = this.head;
        while (node) {
         if (!node.next) {
          return node;
         }
         node = node.next;
        }
      }
       getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
         if (counter === index) {
          return node;
         }
         counter++;
         node = node.next;
        }
       return null;
      }
    }
    const list = new LinkedList();
    list.insertFirst("a");
    list.insertLast("b");
    list.insertLast("c");
    console.log(list.getAt(0))