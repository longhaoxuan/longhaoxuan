function LinkedList() {
  let Node = function(element) {
      this.element = element;
      this.next = null;
    },
    current;
  let length = 0;
  let HEAD = null;

  this.append = function(element) {
    let node = new Node(element);
    if (HEAD == null) {
      HEAD = node;
    } else {
      current = HEAD;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function(element, position) {
    let node = new Node(element),
      current = HEAD,
      index = 0,
      previous;

    if (position > -1 && position < length) {
      if (position == 0) {
        node.next = current;
        HEAD = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.remove = function(element) {
    let node = new Node(element),
      current = HEAD,
      previous;
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = HEAD,
        index = 0,
        previous;
      if (position === 0) {
        HEAD = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.next;
    } else {
      return null;
    }
  };

  this.indexOf = function(element) {};

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return HEAD;
  };

  this.toString = function() {
    let current = HEAD,
      string = "";
    while (current) {
      string += current.element + (current.next ? "--->" : "");
      current = current.next;
    }
    return string;
  };
  this.print = function() {};
}

// ll = new LinkedList();
// ll.append("ladf");
// ll.append("aaa");
// ll.insert("bbb", 1);

// ll.removeAt(1);
// console.log(ll.toString());
// console.log(ll.__proto__===LinkedList.prototype)

function DoublyLikedList() {
  let Node = function(elememt) {
    this.elememt = elememt;
    this.next = null;
    this.prev = null;
  };

  let HEAD = null,
    TAIL = null;

  this.insert = function(element, position) {};
  this.removeAt = function(position) {};
}
