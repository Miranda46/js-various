const linkedList = () => {
    let size = 0;
    let head = null;
    let tail = null;

    const setHead = (newHead) => head = newHead;
    const setTail = (newTail) => tail = newTail;
    const getHead = () => head;
    const getTail = () => tail;
    
    const Node = function(_value){
        let value = _value ? _value : null;
        nextNode = null;
        return { value, nextNode };
    }

    const sizer = () => size++;
    const getSize = () => size;

    const append = (value) => {
        let node = Node(value);
        if (getTail() === null){
            setTail(node);
        } else {
            getTail().nextNode = node;
            setTail(node);
        }
        if ( getHead() === null ){
            setHead(node);
        }
        sizer();
    }

    const prepend = function(value){
        let node = Node(value);
        if (head === null){
            head = node;
        } else {
            node.nextNode = head;
            head = node;
        }
        if ( tail === null ){
            tail = node;
        }
        size++;
    }

    const at = function(index){
        if ( index >= getSize() || index < 0 ){
            return null;
        }
        let counter = 0
        let node = getHead();
        while ( true ) {
            if (counter === index) {
                return node;
            }
            if (node.nextNode) node = node.nextNode;
            else return;
            counter++;
        }
    }

    const pop = function(){
        if (!getTail()){
            return; 
        };
        if (getSize() === 1){
            setHead(null);
            setTail(null);
            size--
            return;
        }
        
        let node = at( getSize() - 2 );
        setTail(node);
        node.nextNode = null;     
        size--;
    }

    const contains = function (value){
        if (!head) return false;
        let node = head;
        while ( true ) {
            if (node.value === value){
                return true;
            } else if (node.nextNode === null) {
                return false;
            }
            node = node.nextNode;
        }
    }

    const find = function(value){
        if (!head) return null;
        let counter = 0;
        let node = head;
        while ( true ) {
            if (node.value === value){
                return counter;
            } else if (node.nextNode === null) {
                return null;
            }
            node = node.nextNode;
            counter++;
        }
    }

    const toString = function() {
        if (!getHead()) {
            console.log('null');
            return
        };
        let string = '';
        let node = getHead();
        while ( true ) { 
            if (node === null){
                string += 'null';
                console.log(string);
                return;
            }
            string += `( ${ node.value } ) -> `;
            node = node.nextNode;
        }
    }
    return { getSize, sizer, getHead, getTail, append, prepend, at, pop, contains, find, toString };
}



const ll = linkedList();
ll.append('primero');
ll.prepend('antes');
console.log('head', ll.getHead());
console.log('tail', ll.getTail());
console.log('at', ll.at(0));

ll.toString();
console.log('pop');
ll.pop()
console.log(ll.getSize())
ll.toString();
console.log('pop');
ll.pop()
ll.toString();
ll.append('ultimo');
ll.prepend('inicial');
console.log('append ultimo, prepend inicial')
ll.toString();
console.log('find inicial:', ll.find('inicial'));
console.log('find noexiste:', ll.find('noexiste'))
console.log('contains inicial:', ll.contains('inicial'));
console.log('contains noexiste:', ll.contains('noexiste'))
console.log(ll.getSize());


const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();