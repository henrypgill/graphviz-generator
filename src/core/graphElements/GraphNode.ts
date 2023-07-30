type Shape = "box" | "trapezium" | "circle" | "ellipse";

export interface GraphNode {
    name: string;
    label: string;
    shape: Shape;
    color: string;
}

export function createNode(
    nodeName: string,
    nodeLabel = "",
    nodeShape: Shape = "box",
    nodeColor = "orange"
): GraphNode {
    const newNode: GraphNode = {
        name: nodeName,
        label: nodeLabel,
        shape: nodeShape,
        color: nodeColor,
    };

    return newNode;
}

export function createNodeString(graphNode: GraphNode): string {
    return `${graphNode.name} [label="${graphNode.label}" shape="${graphNode.shape}" style="filled" color="${graphNode.color}"]`;
}
