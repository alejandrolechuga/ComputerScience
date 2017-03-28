/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);
    var distanceCounter = 0;
    while(!queue.isEmpty()) {
        
        var index = queue.dequeue();
        var vertice = graph[index];
        for (var i = 0; i < vertice.length; i++ ) {
            var nextVertice = vertice[i];
            var nextDistance = bfsInfo[index].distance+1;
            if (bfsInfo[nextVertice].distance === null) {
                bfsInfo[nextVertice].distance = nextDistance;
                bfsInfo[nextVertice].predecessor = index;
                queue.enqueue(nextVertice);
            }
        }
    }
    
    return bfsInfo;
};


var adjList = [
    [1],       // 0 
    [0, 4, 5], // 1 
    [3, 4, 5], // 2 
    [2, 6],    // 3
    [1, 2],    // 4
    [1, 2, 6], // 5
    [3, 5],    // 6
    []         // 7
    ];
var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
    println("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}


Program.assertEqual(bfsInfo[0], {distance: 4, predecessor: 1});
Program.assertEqual(bfsInfo[1], {distance: 3, predecessor: 4});
Program.assertEqual(bfsInfo[2], {distance: 1, predecessor: 3});
Program.assertEqual(bfsInfo[3], {distance: 0, predecessor: null});
Program.assertEqual(bfsInfo[4], {distance: 2, predecessor: 2});
Program.assertEqual(bfsInfo[5], {distance: 2, predecessor: 2});
Program.assertEqual(bfsInfo[6], {distance: 1, predecessor: 3});
Program.assertEqual(bfsInfo[7], {distance: null, predecessor: null});

