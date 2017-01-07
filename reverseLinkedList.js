function node(data){
    this.data = data;
    this.next = null;
}
function linkedList(){
    this.head = new node("head");
    this.insert = function(data){
        var n = new node(data);
        if(this.head === null){
            this.head = n;
        }
        else{
            var current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = n;
        }
    };
    this.display = function(){
        var current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
function reverseLinkedList(head){
    if(!head || !head.next){
        return head;
    }
    var newHead = null;
    while(head){
        var next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
}

var atp = new linkedList();
atp.insert("Roger Federer");
atp.insert("Serena Williams");
atp.insert("Maria Sharapova");
atp.insert("Rafa Nadal");
atp.insert("Novak Djokovic");
atp.insert("Thomas Berdych");

var ll = reverseLinkedList(atp.head);
atp.head = ll;
atp.display();