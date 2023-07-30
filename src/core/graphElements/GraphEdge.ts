import { GraphNode } from "./GraphNode";

export interface GraphEdge {
    name: string;
    label: string;
    color: string;
    originNode: GraphNode;
    destinationNode: GraphNode;
}

export function createEdge(
    edgeName: string,
    edgeLabel = "",
    originGraphNode: GraphNode,
    destinationGraphNode: GraphNode
): GraphEdge {
    const newEdge: GraphEdge = {
        name: edgeName,
        label: edgeLabel,
        color: "black",
        originNode: originGraphNode,
        destinationNode: destinationGraphNode,
    };

    return newEdge;
}

export function createEdgeString(graphEdge: GraphEdge): string {
    return `${graphEdge.originNode.name} -> ${graphEdge.destinationNode.name} [label="${graphEdge.label}"  color="${graphEdge.color}"]`;
}
