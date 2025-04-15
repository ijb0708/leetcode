class Solution {
    public long goodTriplets(int[] nums1, int[] nums2) {
        
        // int nums1Length = nums1.length;
        int[] pos2 = new int[nums1.length];
        int[] reversedIdxMapping = new int[nums1.length];

        for(int i=0; i<nums1.length; i++) {
            pos2[nums2[i]] = i;
            // System.out.println(i + " " + nums2[i] + " " + pos2[nums2[i]]);
        }
        for(int i=0; i<reversedIdxMapping.length; i++) {
            reversedIdxMapping[pos2[nums1[i]]] = i;
        }

        // for(int i=0; i<nums1.length; i++) {
        //     System.out.print(pos2[i] + " ");
        // }
        // System.out.print("\n");
        // for(int i=0; i<nums1.length; i++) {
        //     System.out.print(reversedIdxMapping[i] + " ");
        // }

        FenwickTree tree = new FenwickTree(nums1.length);
        long answer = 0;
        for(int i=0; i<nums1.length; i++) {
            int pos = reversedIdxMapping[i];
            int left = tree.query(pos);
            tree.update(pos, 1);
            int right = (nums1.length - 1 - pos) - (i - left);
            answer += (long) left * right;
        }

        return answer;
    }
}

class FenwickTree {
    private int[] tree;

    public FenwickTree(int size) {
        this.tree = new int[size + 1];
    }

    public int query(int idx) {
        idx++;
        int sum = 0;
        while(idx > 0) {
            sum += tree[idx];
            idx -= idx & -idx;
        }
        return sum;
    }

    public void update(int idx, int delta) {
        idx++;
        while(idx < this.tree.length) {
            tree[idx] += delta;
            idx += idx & -idx;
        }
    }
}