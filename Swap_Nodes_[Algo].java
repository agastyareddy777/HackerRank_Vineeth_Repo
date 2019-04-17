import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {
    public static class TreeNode{
        int value;
        TreeNode left;
        TreeNode right;
        public TreeNode(int val){
            this.value = val;
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int no_nodes = sc.nextInt();
        TreeNode root = new TreeNode(1);
        int l_val, r_val;
        int[] nodes = new int[no_nodes];
        for(int i=0;i<no_nodes;i++){
            nodes[i] = i+1;
        }
        TreeNode tempNode;
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        for(int i=0;i<no_nodes;i++){
            l_val = sc.nextInt();
            r_val = sc.nextInt();
            tempNode = queue.poll();
            if(l_val != -1){
                tempNode.left = new TreeNode(l_val);
                queue.add(tempNode.left);
            }
            if(r_val != -1){
                tempNode.right = new TreeNode(r_val);
                queue.add(tempNode.right);
            }
        }
        int test_cases = sc.nextInt();
        int[] k = new int[test_cases];
        for(int i=0; i<test_cases;i++){
            k[i] = sc.nextInt();
        }
        for(int i=0; i<test_cases;i++){
            swapTreeNodes(root, k[i]);
            System.out.println();
        }
    }
    private static void swapTreeNodes(TreeNode root, int depth) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        queue.add(null);
        TreeNode temp = null, tempNode;
        int cur_depth = 1;
        Queue<TreeNode> tempQueue;
        while(!queue.isEmpty()){
            tempNode = queue.poll();
            if(cur_depth == depth){
                temp = tempNode;
                tempQueue = new LinkedList<TreeNode>(queue);
                while(temp != null){
                    swapChilds(temp, temp.left, temp.right);
                    temp = tempQueue.poll();
                }
                cur_depth = 0;
            }
            if(tempNode == null && !queue.isEmpty()){
                queue.add(null);
                cur_depth += 1;
                continue;
            }
            if(tempNode != null && tempNode.left != null){
                queue.add(tempNode.left);
            }
            if(tempNode != null && tempNode.right != null){
                queue.add(tempNode.right);
            }
        }
        inorder_traversal(root);
    }
    private static void swapChilds(TreeNode temp, TreeNode left, TreeNode right) {
        temp.right = left;
        temp.left = right;
    }
    public static void inorder_traversal(TreeNode root){
        Stack<TreeNode> s = new Stack<TreeNode>();
        s.push(root);
        TreeNode tempNode = root;
        while(!s.isEmpty()){
            while(tempNode != null && tempNode.left != null){
                s.push(tempNode.left);
                tempNode = tempNode.left;
            }
            tempNode = s.pop();
            System.out.print(tempNode.value+" ");
            tempNode = tempNode.right; 
            if(tempNode != null){
                s.push(tempNode);
            }
        }
    }
}