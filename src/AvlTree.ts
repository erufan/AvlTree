class AvlNode {
  public height: number = 0;
  public leftChild: AvlNode | null = null;
  public rightChild: AvlNode | null = null;

  constructor(public value: number) {}
}

class AvlTree {
  private root: AvlNode | null = null;

  public insert(value: number) {
    this.root = this.$insert(this.root, value);
  }
  private $insert(root: AvlNode | null, value: number): AvlNode {
    if (root == null) return new AvlNode(value);
    if (root.value > value)
      root.leftChild = this.$insert(root.leftChild, value);
    if (root.value < value)
      root.rightChild = this.$insert(root.rightChild, value);

    root.height =
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1;

    return root;
  }

  private height(node: AvlNode | null) {
    return node == null ? -1 : node.height;
  }
}

export default AvlTree;
