// import { createNodeString } from "../components/GraphVizStrings";
import { createNode, createNodeString } from "../core/graphElements/GraphNode";

test("test a string is returned", () => {
    const node = createNode("string");
    expect(node.name).toEqual("string");
});
