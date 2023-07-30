// import { createNodeString } from "../components/GraphVizStrings";
import { createEdge, createEdgeString } from "../core/graphElements/GraphEdge";

test("test a string is returned", () => {
    const node = createNode("string");
    expect(node.name).toEqual("string");
});
