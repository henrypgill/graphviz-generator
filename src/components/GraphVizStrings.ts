import { GraphEdge, GraphNode } from "./graphElements";


export function createNodeString(graphNode: GraphNode) {
    return `${graphNode.name} [label="${graphNode.label}" shape="${graphNode.shape}" style="filled" color="${graphNode.color}"]`

}


export function createEdgeString(graphEdge: GraphEdge) {

    return `${graphEdge.originNode.name} -> ${graphEdge.destinationNode.name} [label="${graphEdge.label}"  color="${graphEdge.color}"]`
}