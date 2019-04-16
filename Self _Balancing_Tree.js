	/* Class node is defined as :
    class Node 
    	int val;	//Value
    	int ht;		//Height
    	Node left;	//Left child
    	Node right;	//Right child

	*/
	static void print(Node root) {
        if (root == null) {
            return;
        }
        print(root.left);
        System.out.print(root.val + "(" + root.ht + ") ");
        print(root.right);
    }
    static Node insert(Node root,int val){
        Node node;
        if (root == null) {
            root = new Node();
            root.val = val;
            root.left = null;
            root.right = null;
            root.ht = 0;
            return root;
        } else {
            if (val < root.val) {
                node = insert(root.left, val);
                root.left = node;
                root.ht = root.left.ht + 1;
            } else {
                node = insert(root.right, val);
                root.right = node;
                root.ht = root.right.ht + 1;
            }
        }
        int leftHt = root.left == null ? 0 : root.left.ht+1;
        int rightHt = root.right == null ? 0 : root.right.ht+1;
        int balance = leftHt - rightHt;
        if (balance > 1) {
            leftHt = root.left.left == null ? 0 : root.left.left.ht+1;
            rightHt = root.left.right == null ? 0 : root.left.right.ht+1;
            balance = leftHt - rightHt;
            if (balance < 0) {
                node = root.left;
                root.left = root.left.right;
                node.right = root.left.left;
                root.left.left = node;
                root.left.ht++;
                root.left.left.ht--;
            }
            node = root.left;
            root.left = node.right;
            node.right = root;
            root = node;
            root.right.ht -= 2;
        } else if (balance < -1) {
            leftHt = root.right.left == null ? 0 : root.right.left.ht+1;
            rightHt = root.right.right == null ? 0 : root.right.right.ht+1;
            balance = leftHt - rightHt;
            if (balance > 0) {
                node = root.right;
                root.right = root.right.left;
                node.left = root.right.right;
                root.right.right = node;
                root.right.ht++;
                root.right.right.ht--;
            } 
            node = root.right;
            root.right = node.left;
            node.left = root;
            root = node;
            root.left.ht -= 2;
        }
        return root;
    }