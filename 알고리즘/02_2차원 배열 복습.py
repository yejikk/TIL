arr = [[1,2,3,4],
       [5,6,7,8],
       [9,10,11,12]]

'''
행 우선 순회
: 방향을 행을 기준으로 탐색한다
  행이 기준이기 때문에 1행은 고정 -> 열이 돌아가면서 탐색됨
  첫 번째 행이 끝나면 다음 행을 탐색하면서 순회하며 모든 행렬을 탐색한다.
'''
for i in range(len(arr)):
    for j in range(len(arr[i])):
        print(arr[i][j], end=' ')
    print()
print()

'''
열 우선 순회
: 방향을 열을 기준으로 탐색한다.
  열이 기준이기 때문에 열은 고정 -> 행이 돌아가면서 탐색
'''
for i in range(len(arr[i])):
    for j in range(len(arr)):
        print(arr[j][i], end=' ')
    print()
print()

'''
델타 탐색
'''
x = 1 # 행
y = 1 # 열
# arr[1][1] = 6으로 6을 기준으로 상하좌우의 값을 탐색
dx = [-1, 0, 1, 0] # 행 탐색 (위, 아래)
dy = [0, 1, 0, -1] # 열 탐색 (왼, 오)

# 인접한 값을 arr[testX][testY]으로 나타내서 출력
# 답: 2 7 10 5
for i in range(4):
    testX = x + dx[i]
    testY = y + dy[i]
    print(arr[testX][testY], end=' ')
print('\n')

'''
부분집합 
: n개의 원소로 이루어진 집합은 2^n개의 부분집합을 가지고 있음
  완전 검색을 통한 부분집합 구하기는 원소가 늘어나면 복잡해짐(원소의 수 = for문 수)
  비트 연산자를 사용하여 부분집합을 구함

비트 연산자
: <<(left shift : 2^n을 나타내기 때문에 부분집합의 갯수를 의미함)
  & 
'''
arr2 = [1, 2, 3, 4]
cnt = 0
for i in range(1<<len(arr2)):
    cnt += 1 # 부분집합의 갯수
    for j in range(len(arr2)):
        if i & (1<<j):
            a = arr2[j]
            print(arr2[j], end=' ')
    print()
print()
print(cnt)