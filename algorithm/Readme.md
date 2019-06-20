# Algorithm & Data Structure

## Data Structure
+ **<i>Stack</i>** : 들어오는 순서대로 쌓이고 마지막에 들어온 순서 대로 빠짐.
+ **<i>Queue</i>** : 들어오는 순서대로 쌓이고 들어온 순서대로 빠짐.
+ **<i>Tree</i>** 가장 위에있는 Node를 Root라고 하고 가장 아래있는 Node를 leaf라고 함. root도 leaf도 아닌 노드들은 내부 노드라고 부르며, 노드와 노드사이를 이어주는 선을 branch나 edge라고 부름, 시작점은 반드시 root이라고하며, 각 노드들을 지나가는 길을 path라고 부름. 부모노드에서 자식노드까지의 path간의 edge를 height라고 하며 4개의 edge를 지나가면 height를 4라고함. (트리를 거치는 수를 말함.) 
+ **<i>Binary tree</i>**
```js
var Tree = (function () {
      function Tree() {
        this.count = 0;
        this.root;
      }

      function Node(data) {
        this.data = data;
        this.left;
        this.right;
      }

      function _insert(root, node) {
        if (!root) return node;
        if (node.data < root.data) {
          root.left = _insert(root.left, node);
          return root;
        } else {
          root.right = _insert(root.right, node);
          return root;
        }
        return root;
      }

      Tree.prototype.add = function (data) {
        var node = new Node(data);
        if (this.count == 0) {
          this.root = node;
        } else {
          _insert(this.root, node);
        }
        return ++this.count;
      };

      function _get(data, node) {
        if (node) {
          if (data < node.data) {
            return _get(data, node.left);
          } else if (data > node.data) {
            return _get(data, node.right);
          } else {
            return node;
          }
        } else {
          return null;
        }
      }

      Tree.prototype.get = function (data) {
        if (this.root) {
          return _get(data, this.root);
        } else {
          return null;
        }
      };

      function _remove(root, data) {
        var newRoot, exchange, temp;
        if (!root) return false;
        if (data < root.data) {
          root.left = _remove(root.left, data);
        } else if (data > root.data) {
          root.right = _remove(root.right, data);
        } else {
          if (!root.left) {
            newRoot = root.right;
            // root 메모리 정리
            return newRoot;
          } else if (!root.right) {
            newRoot = root.left;
            // root 메모리 정리
            return newRoot;
          } else {
            exchange = root.left;
            while (exchange.right) exchange = exchange.right;
            temp = root.data;
            root.data = exchange.data;
            exchange.data = temp;
            root.left = _remove(root.left, exchange.data);
          }
        }

        Tree.prototype.remove = function (key) {
          var node = _remove(this.root, key);
          if (node) {
            this.root = node;
            this.count--;
            if (this.count == 0) this.root = null;
          }
          return true;
        };
        return root;
      }
      
      return Tree;
    })();

```




**<i> </i>**