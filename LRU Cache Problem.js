function node(key, data){
    this.key = key;
    this.data = data;
    this.pre = null;
    this.next = null;
}
function DoublyLinkedList(){
    this.count = 0;
    this.head = new  node(null, "head");
    this.tail = new node(null, "tail");
    this.head.next = this.tail;
    this.head.pre = null;
    this.tail.next = null;
    this.tail.pre = this.head;
    this.insertAtHead = function(newNode){
        this.head.next.pre = newNode;
        newNode.next = this.head.next;
        newNode.pre = this.head;
        this.head.next = newNode;
        this.count++;
    };
    this.removeNode = function(node){
        node.next.pre = node.pre;
        node.pre.next = node.next;
        this.count--;
    };
    this.isExist = function(key){
        var current = this.head;
        while(current.next != null){
            if(current.next.key == key){
                return current.next;
            }
            current = current.next;
        }
        return -1;
    }
}

var cache = {};
cache.capacity = 5;
cache.store = new DoublyLinkedList();
cache.get = function(key){
    var node = this.store.isExist(key);
    if(node){
        this.store.removeNode(node);
        this.store.insertAtHead(node);
        return node.data;
    }
    else{
        return -1;
    }
};

cache.set = function (key, data) {
    var node = this.store.isExist(key);
    if(node){
        this.store.removeNode(node);
        node.data = data;
        this.store.insertAtHead(node);
    }
    else{
        var newNode = new node(key, data);
        if (this.store.count < this.capacity){
            this.store.insertAtHead(newNode);
        }
        else{
            this.store.removeNode(this.store.tail.pre);
            this.store.insertAtHead(newNode);
        }
    }
};


