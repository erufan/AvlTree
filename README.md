# AVL Tree Implementation in TypeScript

This project contains a TypeScript implementation of an AVL Tree, a self-balancing binary search tree. Each node in the tree maintains a balance factor to ensure that the tree remains approximately balanced at all times.

## Features

- **Insertion**: Add new elements while maintaining the tree's balance.
- **Self-Balancing**: Automatically balances itself after insertion to maintain optimal search time.

## Classes

### AvlNode

Represents a node in the AVL Tree with the following properties:
- `value`: The numeric value of the node.
- `height`: The height of the node within the tree.
- `balanceFactor`: Indicates whether the node is right-heavy, left-heavy, or balanced.
- `leftChild`: A reference to the left child node.
- `rightChild`: A reference to the right child node.

### AvlTree

Represents the AVL Tree itself with methods to insert nodes and maintain balance.

## Usage

To use this AVL Tree implementation, import the `AvlTree` class and instantiate it:

```typescript
import AvlTree from './path-to-avl-tree';

const avlTree = new AvlTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
// the binary tree is balanced using avlTree
```
##Methods
- insert(value: number): Inserts a new value into the tree.
- private $insert(root: AvlNode | null, value: number): Helper method for insertion.
- private equalizer(root: AvlNode): Balances the tree.
- private leftRotate(root: AvlNode): Performs a left rotation on the tree.
- private rightRotate(root: AvlNode): Performs a right rotation on the tree.
- private setHeight(node: AvlNode): Sets the height of a node.
- private setBalanceFactor(node: AvlNode): Sets the balance factor of a node.
- private heightDifferentiation(node: AvlNode | null): Calculates the height difference between the left and right children of a node.
- private height(node: AvlNode | null): Calculates the height of a node.
