class AvlNode {
  public height: number = 0;
  public balanceFactor: "R heavy" | "L heavy" | "balance" = "balance";
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
    this.setHeight(root);

    if (this.heightDifferentiation(root) > 1) root.balanceFactor = "L heavy";
    else if (this.heightDifferentiation(root) < -1)
      root.balanceFactor = "R heavy";
    else root.balanceFactor = "balance";

    if (root.balanceFactor == "R heavy") {
      if (this.heightDifferentiation(root.rightChild) > 0)
        root.rightChild = this.rightRotate(root.rightChild!);
      return this.leftRotate(root);
    } else if (root.balanceFactor == "L heavy") {
      if (this.heightDifferentiation(root.leftChild) < 0)
        root.leftChild = this.leftRotate(root.leftChild!);
      return this.rightRotate(root);
    }

    return root;
  }

  private leftRotate(root: AvlNode): AvlNode {
    let newRoot = root.rightChild!;

    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private rightRotate(root: AvlNode): AvlNode {
    let newRoot = root.leftChild!;

    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private setHeight(node: AvlNode) {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  private heightDifferentiation(node: AvlNode | null): number {
    return node == null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  }

  private height(node: AvlNode | null) {
    return node == null ? -1 : node.height;
  }
}

export default AvlTree;
