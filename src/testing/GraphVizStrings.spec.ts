// import { createNodeString } from "../components/GraphVizStrings";
import { createNode } from "../core/graphElements";

test("test a string is returned", () => {
    const node = createNode("string");
    expect(node.name).toEqual("string");
});
