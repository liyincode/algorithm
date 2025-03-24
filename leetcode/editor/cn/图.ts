class Graph {
    // 使用 Map 存储图的邻接表
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // 添加顶点
    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // 添加边（无向图）
    addEdge(vertex1: string, vertex2: string): void {
        // 确保两个顶点都存在
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        // 无向图中，两个顶点互相连接
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1);
    }

    // 移除边
    removeEdge(vertex1: string, vertex2: string): void {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(
                vertex1,
                this.adjacencyList.get(vertex1)!.filter(v => v !== vertex2)
            );

            this.adjacencyList.set(
                vertex2,
                this.adjacencyList.get(vertex2)!.filter(v => v !== vertex1)
            );
        }
    }

    // 移除顶点
    removeVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) return;

        // 移除与该顶点相连的所有边
        while (this.adjacencyList.get(vertex)!.length) {
            const adjacentVertex = this.adjacencyList.get(vertex)!.pop()!;
            this.removeEdge(vertex, adjacentVertex);
        }

        // 删除顶点
        this.adjacencyList.delete(vertex);
    }

    // 获取某个顶点的邻接顶点
    getNeighbors(vertex: string): string[] {
        return this.adjacencyList.get(vertex) || [];
    }

    // 获取所有顶点
    getVertices(): string[] {
        return Array.from(this.adjacencyList.keys());
    }

    // 深度优先遍历
    depthFirstSearch(startVertex: string): string[] {
        const result: string[] = [];
        const visited = new Set<string>();

        const dfs = (vertex: string) => {
            if (!this.adjacencyList.has(vertex)) return;

            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of this.adjacencyList.get(vertex)!) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        dfs(startVertex);
        return result;
    }

    // 广度优先遍历
    breadthFirstSearch(startVertex: string): string[] {
        const result: string[] = [];
        const visited = new Set<string>();
        const queue: string[] = [startVertex];

        visited.add(startVertex);

        while (queue.length) {
            const currentVertex = queue.shift()!;
            result.push(currentVertex);

            for (const neighbor of this.adjacencyList.get(currentVertex) || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // 打印图结构
    print(): void {
        for (const [vertex, neighbors] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${neighbors.join(', ')}`);
        }
    }
}

// 使用示例
const graph = new Graph();

// 添加顶点
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// 打印图结构
console.log("图结构:");
graph.print();

// 深度优先遍历
console.log("DFS 从 'A' 开始:", graph.depthFirstSearch('A'));

// 广度优先遍历
console.log("BFS 从 'A' 开始:", graph.breadthFirstSearch('A'));

// 获取 'A' 的邻居
console.log("A 的邻居:", graph.getNeighbors('A'));

// 移除一条边
graph.removeEdge('A', 'B');
console.log("移除边 A-B 后:");
graph.print();

// 移除顶点
graph.removeVertex('D');
console.log("移除顶点 D 后:");
graph.print();
