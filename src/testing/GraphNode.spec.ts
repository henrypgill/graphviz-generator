import { createNode, createNodeString } from "../core/graphElements/GraphNode";
import { getViz } from "../core/vizUtils";

test("test the returned object has the correct property values", () => {
    const node = createNode(
        "node1",
        "Node 1",
        "ellipse",
        "orange",
        "blue",
        "filled"
    );
    expect(node.name).toBe("node1");
    expect(node.label).toBe("Node 1");
    expect(node.shape).toBe("ellipse");
    expect(node.color).toBe("orange");
    expect(node.fontcolor).toBe("blue");
    expect(node.style).toBe("filled");
});

test("test the returned string is correct", () => {
    const node = createNode(
        "node1",
        "Node 1",
        "ellipse",
        "orange",
        "blue",
        "filled"
    );
    const nodeString = createNodeString(node);
    expect(nodeString).toEqual(
        `node1 [label="Node 1" shape="ellipse" color="orange" fontcolor="blue" style="filled"]`
    );
});

test("test the render result of the returned string is a success", async () => {
    const viz = await getViz();
    const node = createNode(
        "node1",
        "Node 1",
        "ellipse",
        "orange",
        "blue",
        "filled"
    );
    const nodeString = createNodeString(node);
    const renderResult = viz.render(`digraph { \n${nodeString}\n}`);
    expect(renderResult.status).toBe("success");
});
