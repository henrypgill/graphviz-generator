import { GraphNode } from "./GraphNode";

type EdgeDir = "forward" | "back" | "both" | "none";

export interface GraphEdge {
    name: string;
    label?: string;
    color?: string;
    fontcolor?: string;
    originNode: GraphNode;
    destinationNode: GraphNode;
    dir?: EdgeDir;
}

export function createEdge(
    edgeName: string,
    edgeLabel: string,
    originNode: GraphNode,
    destinationNode: GraphNode,
    edgeColor?: string,
    edgeFontcolor?: string,
    edgeDir?: EdgeDir
): GraphEdge {
    const newEdge: GraphEdge = {
        name: edgeName,
        label: edgeLabel,
        originNode: originNode,
        destinationNode: destinationNode,
        color: edgeColor,
        fontcolor: edgeFontcolor,
        dir: edgeDir,
    };

    return newEdge;
}

export function createEdgeString(graphEdge: GraphEdge): string {
    const edgeKeys: (keyof GraphEdge)[] = Object.keys(graphEdge).filter(
        (key) =>
            key !== "name" && key !== "originNode" && key !== "destinationNode"
    ) as (keyof GraphEdge)[];
    const nodeStringArr = edgeKeys.map((key) =>
        graphEdge[key] ? `${key}="${graphEdge[key]}"` : ""
    );
    return `${graphEdge.originNode.name} -> ${
        graphEdge.destinationNode.name
    } [${nodeStringArr.join(" ")}]`;
}

// export function createEdgeString(graphEdge: GraphEdge): string {
//     return `${graphEdge.originNode.name} -> ${graphEdge.destinationNode.name} [label="${graphEdge.label}"  color="${graphEdge.color}"]`;
// }
