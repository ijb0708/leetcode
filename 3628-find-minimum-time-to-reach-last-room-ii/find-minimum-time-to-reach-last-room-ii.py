# from queue import PriorityQueue
import heapq

class Solution(object):
    def minTimeToReach(self, moveTime):
        """
        :type moveTime: List[List[int]]
        :rtype: int
        """
        
        directions = [(0, -1), (1, 0), (0, 1), (-1, 0)]
        width = len(moveTime[0])
        height = len(moveTime)
        minTime = [[float("inf") for col in range(width)] for row in range(height)]

        heap = []
        heapq.heappush(heap, (0, 0, 0, 2)) # dist, x, y, spendSecond(1, 2)

        while heap:
            curTime, x, y, spendSecond = heapq.heappop(heap)
            if spendSecond == 1:
                spendSecond = 2
            else:
                spendSecond = 1

            if curTime > minTime[y][x]:
                continue

            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                
                if width > nx >= 0 and  height > ny >= 0:
                    newTime = max(moveTime[ny][nx], curTime) + spendSecond
                    if newTime < minTime[ny][nx]:
                        minTime[ny][nx] = newTime
                        heapq.heappush(heap, (newTime, nx, ny, spendSecond))



        # print(minTime)
        return minTime[height -1 ][width - 1]