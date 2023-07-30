import { GraphCluster, createClusterString } from "./GraphCluster";
import { GraphEdge, createEdgeString } from "./GraphEdge";
import { GraphNode, createNodeString } from "./GraphNode";

export interface Graph {
    name: string;
    bgcolor: string;
}

export interface GraphData {
    name: string;
    graphClusters?: GraphCluster[];
    graphNodes?: GraphNode[];
    graphEdges?: GraphEdge[];
}

export function createGraph(graphData: GraphData): string {
    if (graphData !== undefined) {
        return "";
    }
    let returnGraph = "";
    returnGraph = createGraphString(graphData);

    return returnGraph;
}

export function createGraphString(graphData: GraphData): string {
    const graphNodes = graphData.graphNodes
        ? graphData.graphNodes.map(createNodeString)
        : [];
    const graphEdges = graphData.graphEdges
        ? graphData.graphEdges.map(createEdgeString)
        : [];
    const graphClusters = graphData.graphClusters
        ? graphData.graphClusters.map(createClusterString)
        : [];
    const graphString = [...graphNodes, ...graphEdges, ...graphClusters].join(
        ";"
    );
    return graphString;
}
