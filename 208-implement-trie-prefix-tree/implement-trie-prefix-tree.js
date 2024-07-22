const Node = function() {
    this.isEnd = false;
    this.children = {};
}

var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curNode = this.root;
    for(const ch of word) {
        // if key not exist
        if(!curNode.children.hasOwnProperty(ch)) {
            curNode.children[ch] = new Node();
        }
        curNode = curNode.children[ch];
    }
    curNode.isEnd = true;
    return;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curNode = this.root;
    for(const ch of word) {
        // if key not exist
        if(!curNode.children.hasOwnProperty(ch)) {
            return false;
        }
        curNode = curNode.children[ch];
    }
    // current node has children key
    return curNode.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curNode = this.root;
    for(const ch of prefix) {
        // if key not exist
        if(!curNode.children.hasOwnProperty(ch)) {
            return false;
        }
        curNode = curNode.children[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */