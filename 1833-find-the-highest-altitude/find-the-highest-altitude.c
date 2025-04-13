int largestAltitude(int* gain, int gainSize) {
    
    for(int i=1; i<gainSize; i++) {
        gain[i] += gain[i - 1];
        // answer = answer > gain[i] ? answer : gain[i];
    }

    int answer = -10001;
    for(int i=0; i<gainSize; i++) {
        answer = answer > gain[i] ? answer : gain[i];
        // printf("%d ", gain[i]);
    }

    return answer > 0 ? answer : 0;
}