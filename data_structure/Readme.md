# Data Structure

<i>**자료구조의 개요**</i>

- 자료란 본질에 대한 협상을 나타내는 기호라고 정의할 수 있습니다.
- 자료구조를 이용한 자료 처리 작업은, 접근, 삽입, 삭제, 검색, 복사, 정렬, 병합, 분리 7가지로 분류할 수 있습니다.



#### 배열, 스택, 큐의 개념

-<i>**배열**</i>

배열은 같은 데이터 타입을 갖는 둘 이상의 여러 데이터 항목들이 그룹적으로 모여서 하나의 변수이름으로 인덱스에 의해 호출되는 자료구조라고 할 수 있습니다.

-<i>**스택**</i>

스택이란 자료의 삽입과 삭제가 한쪽 끝에서만 일어나는 자료 구조입니다. 스택에서 자료의 삽입과 삭제는 push와 pop연산을 통해 행할 수 있습니다.

-<i>**큐**</i>

큐란 리스트의 한 쪽 끝에서 새로운 자료들이 삽입되고, 다른 반대편 끝에서는 가장 먼저 삽입되었던 자료들이 삭제되는 자료 구조입니다.



#### 스택, 큐에 대한 연산 알고리즘

자료를 삽입하고자 할 때 꽉 차서 저장될 장소가 없는 경우를 Overflow라 하고, 자료를 삭제하고자 할 대 아무것도 삭제할 것이 없는 경우를 Underflow라고 합니다.



#### 연결리스트

 연결 리스트는 데이터와 링크의 두 필드로 구성되고, 링크 역할의 포인터 변수를 이용하여 각 원소를 링크로 연결하여 나타냅니다.

연결 리스트의 장점은 중간 노드의 삽입과 삭제가 대단히 쉽고 빠르고, 기억 장소로부터 독립적이라는 것입니다.

단점으로는 포인터로 운영해야 하므로 액세스 시간이 느리고, 링크 부분만큼의 기억 공간이 소모되는 것을 들 수 있습니다.

연결 리스트의 종류는 단순 연결 리스트, 이중 연결 리스트, 이중 원형 연결 리스트 등이 있습니다.



#### 트리

트리의 노드들은 계층적으로 가치에 의해 연결되어 경로(path)를 형성하는데, 그래프와는 달리 어떠한 경우에도 사이클(Cycle)을 형성하지 않습니다.

트리는 그 형태나 또는 트리가 갖는 특성에 따라 순서 트리(ordered tree), 오리엔트 트리(oriented tree), 닮은 트리, 이진 트리(binary tree), 사향 트리(skewed tree) 등으로 나눌 수 있습니다.

트리의 순회 방법은 전위 순회, 후위 순회, 패밀리오더 순회, 레벨오더 순회가 있습니다.



#### 그래프

간선을 나타내는 정점의 쌍의 순서가 없는 그래프를 무방향 그래프라 하고, 어느 한 정점에서 다른 정점으로 이어지는 간선이 화살표로 표시된 그래프를 방향 그래프 라고 합니다.



#### 재귀 호출

여러 개의 기본적인 명령어들이 모여서 하나의 논리적인 작업을 수행하는 모듈을 함수,

함수는 호출 방법의 차이에 따라 직접 재귀와 간접 재귀로 나눌 수 있습니다.



#### 계승을 구하는 재귀 함수

재귀 호출에는 재귀 호출이 끝이 나는 종료 조건이 있 어야하고, 재귀 호출이 이루어질 때 마다 점점 작아져야하는 2가지 조건이 있습니다.

재귀 호출의 전략에는 문제의 크기를 조금씩 줄여가는 방법, 문제의 크기를 양분하여 가는 방법, 문제 자체에 점점 가까워져 가는 방법으로 나눌 수 있습니다.



#### 프랙탈

어떤 도형의 부분들이 전체의 작은 닮은 꼴들을 포함하고, 어떤 도형이 전체와 똑같은 모양의 닯은 부분들로 세분화되는 것을 자기 유사성이라고 합니다.

프렉탈의 특징은 자기 유사성과 재귀라는 특징을 가지고 있습니다.



#### 정렬의 개요

컴퓨터 기억 장소 내에 저장 되어 있는 자료를 키에 따라 원하는 순서로 재배치하는 작업을 정렬(sort)이라고 합니다.

 자료를 작은 순부터 큰 순으로 정렬하는 방법을 오름 차순이라고 하고, 큰 순부터 작은 순으로 정렬하는 방법을 내림 차순이라고 합니다.

정렬 알고리즘의 선택에는 아래의 리스트와 같은 고려로 분류할 수 있습니다.

<i>**컴퓨터 시스템의 특성 고려**</i>

+ 자료의 양 분석,
+ 자료의 초기 정렬 상태 고려,
+ 키 값의 분포 상황 고려,
+ 키 비교 횟수 계산,
+ 필요한 작업 곤간

[정렬 알고리즘의 시각도를 볼수 있는 페이지](  http://www.sorting-algorithms.com/)





#### 합병정렬

작은 크기의 리스트들을 각각 정렬한 수 이 들을 합병하고, 크기가 2배인 리스트를 과정을 되풀이하여, 전체 리스트의 정렬ㄹ을 하는 방법을 합병 정렬이라고 합니다.



#### 퀵 정렬

주어진 리스트에서 피봇원소를 선택하여 피봇 원소를 기준으로 분할한 후, 분할된 부분 리스트를 정렬시키는 과정을 재귀적 으로 적용함으로써 전체 리스트를 정렬하는 방법을 퀵 정렬이라고 합니다.

+ 퀵 정렬 알고리즘과 병합 정렬 알고리즘의 평균적인 시간 복잡도는  O(nlog2n)입니다. 그러나 실제적으로 퀵 정렬이 병합 정렬보다 빠르게 정렬을 수행합니다.



#### Quick Sort

Quick Sort는 A.R 호어 가 개발한 정렬 알고리즘이다. 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다. Quick Sort는 n 개의 데이터를 정렬할 때, 최악의 경우 O(n2)번의 비교를 수행하고, 평균적으로 O(n log n)번의 비교를 수행한다.

Quick Sort의 내부 루프는 대부분의 컴퓨터 아키텍쳐에서 효율적으로 작동하도록 설계 되어 있고, (그 이유는 메모리 참조가 지역화 되어 있기 때문에 CPU, 캐시의 히트 율이 높아지기 때문이다.) 대부분의 실지랴적인 데이터를 정렬할 때, **제곱 시간이 걸릴 확률이 거의 없도록 알고리즘을 설계하는 것이 가능하다.** 때문에 일반적인 경우 퀵 정렬은 다른 O(n log n)알고리즘에 비해 훨씬 빠르게 동작한다. 그리고 Quick Sort는 정렬을 위해 O(log g)만큼의 memory를 필요로 한다. 또한 Quick Sort 는 불안정 정렬에 속한다.

분할 작업을 순환적으로 반복하면서 기준 값(Pivot)의 왼쪽 부분 집합과 오른쪽 부분 집합을 정렬하는 방법

1. 리스트 가운데 하나의 원소를 선택한다. 이렇게 고른 것이 Pivot 이다.
2. Pivot앞에는 Pivot 보다 작은 모든 원소들이 오고, Pivot보다 값이 큰 모든 원소들이 오도록 Pivot을 기준으로 리스트를 둘로 나눈다. 이렇게 리스트를 둘로 나눈 것을 분할 이라고 하고, 분할을 마친 뒤에 Pivot은 더 이상 움직이지 않는다.
3. 분할 된 두개의 작은 리스트에 대해 재귀적으로 이 과정을 반복한다. 쟈ㅐ귀는 리스트의 크기가 0이나 1이 될 때 까지 반복한다.

<i>**예제**</i>

1. Pivot은 p, 리스트의 왼족과 오른 쪽 끝에서 시작한 인덱스를 i, j 라고 하자.
2. 리스트 왼쪽에 있는 i의 위치의 Pivot 값보다 크고, 오른쪽에 있는 j 위치의 값은 Pivot보다 작으므로 둘을 교환 한다.
3. j 위치의 값이 Pivot 값보다 작지만, i 의 위치의 값도 피벗보다 작으므로 교환하지 않는다.
4. l 위치를 피벗 값보다 큰 값이 나올 떄 가지 진행해 j위치의 값과 비교한다.
5. l 위치와 j 위치의 값이 만나면, j 위치의 값과 Pivot 값을 교환한다.
6. Pivot 값 좌우의 리스트에 대해 퀵 정렬을 재귀적으로 수행한다.



![2744544554056CCA2A](https://user-images.githubusercontent.com/33567964/58454230-c4c71f80-8158-11e9-8411-fa7b55be0a0b.png)