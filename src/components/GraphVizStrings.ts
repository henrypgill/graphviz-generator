import { GraphCluster, GraphData, GraphEdge, GraphNode } from "./graphElements";

export function createNodeString(graphNode: GraphNode): string {
    return `${graphNode.name} [label="${graphNode.label}" shape="${graphNode.shape}" style="filled" color="${graphNode.color}"]`;
}

export function createEdgeString(graphEdge: GraphEdge): string {
    return `${graphEdge.originNode.name} -> ${graphEdge.destinationNode.name} [label="${graphEdge.label}"  color="${graphEdge.color}"]`;
}

export function createClusterString(graphCluster: GraphCluster): string {
    const clusterNodes = graphCluster.clusterNodes.map(createNodeString);
    const clusterEdges = graphCluster.clusterEdges.map(createEdgeString);
    const clusterString = [...clusterNodes, ...clusterEdges].join(";"); 
    return clusterString
}


export function createGraphString(graphData: GraphData): string {
const graphNodes = graphData.graphNodes ? graphData.graphNodes.map(createNodeString) : [];
const graphEdges = graphData.graphEdges ? graphData.graphEdges.map(createEdgeString) : [];
const graphClusters = graphData.graphClusters ? graphData.graphClusters.map(createClusterString) : [];
const graphString = [...graphNodes, ...graphEdges, ...graphClusters].join(";"); 
return graphString
}
