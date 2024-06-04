class AvlNode {
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

    return root;
  }
}

export default AvlTree;
