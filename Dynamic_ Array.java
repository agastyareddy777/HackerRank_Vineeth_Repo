import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
  public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<ArrayList> n = new ArrayList<ArrayList>();
        int p = scan.nextInt();
        for(int x = 0; x < p; x++) {
            n.add(new ArrayList<Integer>());
        }
        int q = scan.nextInt();
        int lastans = 0;
        for (int x = 0; x < q; x++) {
            int type = scan.nextInt();
            int first = scan.nextInt();
            int second = scan.nextInt();
            int targetSeq = (first^lastans)%(n.size());
            if (type == 1) {
                n.get(targetSeq).add(second);
            }
            else {
                int num = second%(n.get(targetSeq).size());
                int value = (int)n.get(targetSeq).get(num);
                System.out.println(n.get(targetSeq).get(num));
                lastans = value;
            }
        }
    }
}