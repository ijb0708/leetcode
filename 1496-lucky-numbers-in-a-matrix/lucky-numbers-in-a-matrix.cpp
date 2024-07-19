class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        
        vector<int> answer;
        int col[51] = {0,};

        for(int i=0; i<matrix[0].size(); i++) {
            int maxIdx = 0;
            for(int j=0; j<matrix.size(); j++) {
                if(matrix[j][i] > matrix[maxIdx][i]) {
                    maxIdx = j;
                }
            }
            col[i] = maxIdx;
        }

        for(int i=0; i<matrix.size(); i++) {
            int minIdx = 0;
            for(int j=0; j<matrix[0].size(); j++) {
                if(matrix[i][j] < matrix[i][minIdx]) {
                    minIdx = j;
                }
            }
            if(col[minIdx] == i) {
                answer.push_back(matrix[i][minIdx]);
            }
        }
        return answer;
    }
};