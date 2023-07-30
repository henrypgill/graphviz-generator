import { createClusterString, createEdgeString, createGraphString, createNodeString } from "./GraphVizStrings";

type Shape = "box" | "trapezium" | "circle" | "ellipse";
// type GraphElements = ( GraphComponent |GraphNode | GraphEdge | GraphCluster )[];

interface GraphComponent {
    name: string;
    label: string;
}


export interface GraphNode extends GraphComponent{
    shape: Shape;
    color: string;
}

export function createNode(nodeName: string, nodeLabel = nodeName, nodeShape: Shape="box", nodeColor="orange"): GraphNode {
    const newNode: GraphNode = {
        name: nodeName,
        label: nodeLabel,
        shape: nodeShape,
        color: nodeColor,
    }


    return newNode
}

export interface GraphEdge extends GraphComponent{
    color: string;
    originNode: GraphNode;
    destinationNode: GraphNode;
}

export function createEdge(edgeName: string, edgeLabel = "", originGraphNode: GraphNode, destinationGraphNode: GraphNode): GraphEdge {

    const newEdge: GraphEdge = {
        name: edgeName,
        label: edgeLabel,
        color: "black",
        originNode: originGraphNode,
        destinationNode: destinationGraphNode,
    }
    
    
    return newEdge
}

export interface GraphCluster extends GraphComponent{
    nodeStyle: string;
    clusterNodes: GraphNode[]
    clusterEdges: GraphEdge[]
}

export function createCluster(clusterName: string, clusterLabel = "", nodeStyle: string, clusterNodes: GraphNode[] = [], clusterEdges: GraphEdge[] = []): GraphCluster {
    const newCluster = {
        name: clusterName,
        label: clusterLabel,
        nodeStyle: nodeStyle,
        clusterNodes: clusterNodes,
        clusterEdges: clusterEdges,
    }
    return newCluster
}

export interface GraphData {
    name: string;
    graphClusters?: GraphCluster[];
    graphNodes?: GraphNode[];
    graphEdges?: GraphEdge[];
}

export function createGraph (graphData: GraphData): string {

    if (graphData !==undefined){
        return ""
    }
    let returnGraph = "";
    returnGraph = createGraphString(graphData);





    // returnGraph = [...nodeStrings, ...edgeStrings, ...clusterStrings].join("; "); // !!!!!!!!!!!!!!!!!!!
    return returnGraph;
}

