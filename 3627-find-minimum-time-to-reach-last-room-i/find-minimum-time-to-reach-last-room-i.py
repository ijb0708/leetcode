# import heapq

class Solution(object):
    def minTimeToReach(self, moveTime):
        """
        :type moveTime: List[List[int]]
        :rtype: int
        """

        width = len(moveTime[0]) # 가로길이
        height = len(moveTime) # 세로길이

        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # 방향 설정
        dist = [[float('inf')] * width for _ in range(height)]   # 최소 거리

        # print(dist)

        priorityQue = []
        heapq.heappush(priorityQue, (0, 0, 0)) # (시작 시간, x, y)

        while priorityQue:
            currTime, x, y = heapq.heappop(priorityQue)

            # 현재 위치가 이미 더 빠른 경로로 갔으면 건너뛰기
            if currTime > dist[y][x]:
                continue

            for dx, dy in directions:
                nx, ny = x + dx, y + dy # 상화좌우 이동

                if 0 <= nx < width and 0 <= ny < height: # 이동범위 체크
                    newTime = max(moveTime[ny][nx], currTime) + 1

                    if newTime < dist[ny][nx]:
                        dist[ny][nx] = newTime
                        heapq.heappush(priorityQue, (newTime, nx, ny))
             
        # print(dist)

        return dist[height - 1][width - 1]
        