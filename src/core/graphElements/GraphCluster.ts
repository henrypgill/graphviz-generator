// import { createEdgeString } from "./GraphEdge";
// import { createNodeString } from "./GraphNode";

import { GraphNode } from "./GraphNode";
import { GraphEdge } from "./GraphEdge";

export interface GraphCluster {
    name: string;
    label: string;
    nodeStyle: string;
    clusterNodes: GraphNode[];
    clusterEdges: GraphEdge[];
}

export function createCluster(
    clusterName: string,
    clusterLabel = "",
    nodeStyle: string,
    clusterNodes: GraphNode[] = [],
    clusterEdges: GraphEdge[] = []
): GraphCluster {
    const newCluster = {
        name: clusterName,
        label: clusterLabel,
        nodeStyle: nodeStyle,
        clusterNodes: clusterNodes,
        clusterEdges: clusterEdges,
    };
    return newCluster;
}

export function createClusterString(graphCluster: GraphCluster): string {
    // const clusterNodes = graphCluster.clusterNodes.map(createNodeString);
    // const clusterEdges = graphCluster.clusterEdges.map(createEdgeString);
    // const clusterString = [...clusterNodes, ...clusterEdges].join(";");
    // return clusterString;
    console.log("ignore this" + graphCluster.name);
    return "";
}
