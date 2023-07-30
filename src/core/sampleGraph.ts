import { createEdge } from "./graphElements/GraphEdge";
import { GraphData } from "./graphElements/GraphGraph";
import { createNode } from "./graphElements/GraphNode";

export function getSampleGraphData() {
    const myNode1 = createNode("node1");
    const myNode2 = createNode("node2");
    const myNode3 = createNode("node3");
    const myNode4 = createNode("node4");

    const myEdge1 = createEdge("edge1", "edge 1", myNode1, myNode2);
    const myEdge2 = createEdge("edge2", "edge 2", myNode2, myNode3);
    const myEdge3 = createEdge("edge3", "edge 3", myNode2, myNode4);

    const myNodes = [myNode1, myNode2, myNode3, myNode4];
    const myEdges = [myEdge1, myEdge2, myEdge3];

    const myGraph: GraphData = {
        name: "testGraph",
        graphNodes: myNodes,
        graphEdges: myEdges,
    };

    return myGraph;
}
