import { createEdgeString, createNodeString } from "./GraphVizStrings";

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

export interface GraphEdge extends GraphComponent{
    color: string;
    originNode: GraphNode;
    destinationNode: GraphNode;
}

export interface GraphCluster extends GraphComponent{
    nodeStyle: string;
}



export function createNode(nodeName: string, nodeLabel: string = nodeName, nodeShape: Shape="box", nodeColor="orange"): GraphNode {
    const newNode: GraphNode = {
        name: nodeName,
        label: nodeLabel,
        shape: nodeShape,
        color: nodeColor,
    }


    return newNode
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


export function createGraph (graphNodeArr: GraphNode[], graphEdgeArr: GraphEdge[]) {
    let returnGraph: string[] = [];
    const nodeStrings = graphNodeArr.map(createNodeString)
    const nodeEdges = graphEdgeArr.map(createEdgeString)




    returnGraph = [...nodeStrings, ...nodeEdges]; // !!!!!!!!!!!!!!!!!!!
    return returnGraph;
}

