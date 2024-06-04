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

    root.height =
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1;

    if (this.heightDifferentiation(root) > 1) root.balanceFactor = "L heavy";
    else if (this.heightDifferentiation(root) < -1)
      root.balanceFactor = "R heavy";
    else root.balanceFactor = "balance";

    if (root.balanceFactor == "R heavy") {
      if (this.heightDifferentiation(root.rightChild) > 0)
        console.log(root.rightChild?.value, "right rotate");
      console.log(root.value, "left rotate");
    }
    if (root.balanceFactor == "L heavy") {
      if (this.heightDifferentiation(root.leftChild) < 0)
        console.log(root.leftChild?.value, "left rotate");
      console.log(root.value, "right rotate");
    }

    return root;
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
