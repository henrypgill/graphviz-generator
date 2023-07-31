import { createEdge, createEdgeString } from "../core/graphElements/GraphEdge";
import { GraphNode } from "../core/graphElements/GraphNode";
import { getViz } from "../core/vizUtils";

test("test the returned object has the correct property values", () => {
    const node1: GraphNode = {
        name: "node1",
        label: "Node 1",
        shape: "ellipse",
        color: "orange",
        fontcolor: "blue",
        style: "filled",
    };
    const node2: GraphNode = {
        name: "node2",
        label: "Node 2",
        shape: "box",
        color: "blue",
        fontcolor: "orange",
        style: "filled",
    };

    const edge = createEdge(
        "edge1",
        "Edge 1",
        node1,
        node2,
        "purple",
        "green",
        "both"
    );
    expect(edge.name).toBe("edge1");
    expect(edge.label).toBe("Edge 1");
    expect(edge.originNode.name).toBe("node1");
    expect(edge.destinationNode.name).toBe("node2");
    expect(edge.color).toEqual("purple");
    expect(edge.fontcolor).toBe("green");
    expect(edge.dir).toBe("both");
});

test("test the render result of the returned string is a success", async () => {
    const viz = await getViz();

    const node1: GraphNode = {
        name: "node1",
        label: "Node 1",
        shape: "ellipse",
        color: "orange",
        fontcolor: "blue",
        style: "filled",
    };
    const node2: GraphNode = {
        name: "node2",
        label: "Node 2",
        shape: "box",
        color: "blue",
        fontcolor: "orange",
        style: "filled",
    };

    const edge = createEdge("edge1", "Edge 1", node1, node2, "green");
    const edgeString = createEdgeString(edge);
    const renderResult = viz.render(`digraph { \n${edgeString}\n}`);
    console.log(renderResult);
    expect(renderResult.status).toBe("success");
});
