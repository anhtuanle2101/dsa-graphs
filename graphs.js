class Node{
    constructor(val, adjacent = new Set()){
        this.val = val;
        this.adjacent = adjacent;
    }

    addConnection(node){
        if (node instanceof Node){
            this.adjacent.add(node);
            node.adjacent.add(this);
        }
        else{
            throw new Error("node is not an instance of this class");
        }
    }
}

const holmer = new Node('Holmer');
const marge = new Node('Marge');

// holmer.adjacent.push(marge);
// marge.adjacent.push(holmer);
holmer.addConnection(marge);
