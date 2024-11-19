function linkedList () {
    let size = 0;
    let head = null;
    let tail = null;
    
    const Node = function(_value){
        let value = _value ? _value : null;
        nextNode = null;
        return { value, nextNode };
    }

    const sizer = () => size++;

    const append = (value) => {
        let node = Node(value);
        if (tail === null){
            tail = node;
        } else {
            tail.nextNode = node;
            tail = node;
        }
        if ( head === null ){
            head = node;
        }
        size++;
        console.log(head, tail)
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
        if ( index >= n ){
            return null;
        }
        for (let i = 0; i < index + 1; i++) {
            let node = head.next;
            if (i === index) {
                return node;
            }
        }
    }

    const pop = function(){
        if (!tail){
            return; 
        }
        size--;
        if (size === 1){
            head = null;
            tail = null;
            return;
        }

        let node = at( size - 2 );
        tail = node;
        node.nextNode = null;        
    }

    const contains = function (value){
        if (!head) return false;
        let node = head;
        for ( let i = 0; i < size - 1 ; i++ ){
            if (node.value === value){
                return true;
            }
            let node = node.nextNode;
        }
        return false;
    }

    const find = function(value){
        if (!head) return null;
        let node = head;
        for ( let i = 0; i < size - 1 ; i++ ){
            if (head.value === node.value){
                return i;
            }
            let node = node.nextNode;
        }
        return null;
    }

    const toString = function() {
        if (!head) return null;
        let string = '';
        let node = head;
        while ( true ) { 
            if (!node.nextNode){
                string += 'null';
                console.log(string);
                return;
            }
            string += `${ node.value } -> `;
            node = node.nextNode;
        }
    }
    return { sizer, size, head, tail, append, prepend, at, pop, contains, find, toString };
}

const ll = linkedList();
ll.append('primero');
ll.sizer()
console.log(ll);
ll.toString();
