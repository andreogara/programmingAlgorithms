var BST = {};
BST.node = function(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
}

BST.BinarySearchTree = function(){
    this.root = null;
};

BST.BinarySearchTree.prototype.insert = function(data){
    var newNode = new BST.node(data, null, null);
    if(this.root == null){
        this.root = newNode;
    }
    else{
        var parent, currentNode = this.root;
        while(true){
            parent = currentNode;
            if(currentNode.data > newNode.data){
                currentNode = currentNode.left;
                if(currentNode == null){
                    parent.left = newNode;
                    break;
                }
            }
            else{
                currentNode = currentNode.right;
                if(currentNode == null){
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}

//also returns the current level of each node!
function preOrder(currentNode, level){
    var curLevel = level;
    if(!(currentNode == null)){
        console.log(currentNode.data +" LEVEL::::"+level);
        preOrder(currentNode.left, level+1);
        preOrder(currentNode.right, level+1);
    }
}

function postOrder(currentNode){
    if(!(currentNode == null)){
        postOrder(currentNode.left);
        postOrder(currentNode.right);
        console.log(currentNode.data);
    }
}

function inOrder(currentNode){
    if(!(currentNode == null)){
        inOrder(currentNode.left);
        console.log(currentNode.data);
        inOrder(currentNode.right);
    }
}

var playerTree = new BST.BinarySearchTree();

playerTree.insert(20);
playerTree.insert(40);
playerTree.insert(10);
playerTree.insert(25);
playerTree.insert(13);
playerTree.insert(31);
playerTree.insert(45);


function serialize(root){
    var stringer = [];
    function serializer(node, str){
        if (node == null){
            str.push("null");
            return false;
        }
        else{
            str.push(node.data);
            serializer(node.left, str);
            serializer(node.right, str);
        }
        return str;
    }
    return serializer(root, stringer).toString();
}

function deserialize(strings){
   var strArray = strings.split(',');
    function deserializer(strArr){
        if(strArr.length == 0){
            return null;
        }
        var val = strArr.shift();
        if(val == "null"){
            return null;
        }
        var node = new BST.node(val);
        node.left = deserializer(strArr);
        node.right= deserializer(strArr);
        return node;
    }

    return deserializer(strArray);
}

var arrayfromfile = serialize(playerTree.root);
console.log("#serialized array#####");
console.log(arrayfromfile);
console.log("#deserialized array#####");
console.log(deserialize(arrayfromfile));
