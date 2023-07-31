type Shape = "box" | "trapezium" | "circle" | "ellipse";

// export class GraphNode {
//     name: string;
//     label?: string;
//     shape?: Shape;
//     color?: string;
//     fontcolor?: string;
//     style?: string;
//     constructor(name: string, shape:Shape , color:string, fontcolor:string, style:string){
//         this.name = name;
//         this.shape = shape;
//         this.color = color;
//         this.fontcolor = fontcolor;
//         this.style = style;
//     }
// }

export interface GraphNode {
    name: string;
    label?: string;
    shape?: Shape;
    color?: string;
    fontcolor?: string;
    style?: string;
}

export function createNode(
    nodeName: string,
    nodeLabel: string,
    nodeShape: Shape = "box",
    nodeColor = "black",
    nodeFontColor = "black",
    nodeStyle = "filled"
): GraphNode {
    const newNode: GraphNode = {
        name: nodeName,
        label: nodeLabel,
        shape: nodeShape,
        color: nodeColor,
        fontcolor: nodeFontColor,
        style: nodeStyle,
    };

    return newNode;
}

export function createNodeString(graphNode: GraphNode): string {
    const nodeKeys: (keyof GraphNode)[] = Object.keys(graphNode).filter(
        (key) => key !== "name"
    ) as (keyof GraphNode)[];
    const nodeStringArr = nodeKeys.map((key) =>
        graphNode[key] ? `${key}="${graphNode[key]}"` : ""
    );
    return graphNode.name + " [" + nodeStringArr.join(" ") + "]";
}

/* -------------------- OLD ----- Manual key referencing -------------------- */

// export function createNodeString(graphNode: GraphNode): string {
//     const nameString = graphNode.name ? `${graphNode.name}` : "";
//     const labelString = graphNode.label ? `label="${graphNode.label}"` : "";
//     const shapeString = graphNode.shape ? `shape="${graphNode.shape}"` : "";
//     const colorString = graphNode.color ? `color="${graphNode.color}"` : "";
//     const fontcolorString = graphNode.fontcolor ? `fontcolor="${
//         graphNode.fontcolor}"` : "";
//     const styleString = graphNode.style ? `style="${graphNode.style}"` : "";

//     const returnStringArr = [
//         nameString,
//         labelString,
//         shapeString,
//         colorString,
//         fontcolorString,
//         styleString,
//     ];

//     return returnStringArr[0] + " " + "[" + returnStringArr.slice(1).join(" ") + "]"
// }
