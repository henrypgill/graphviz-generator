// import { createNodeString } from "../components/GraphVizStrings";
import {
    createGraph,
    createGraphString,
} from "../core/graphElements/GraphGraph";

test("test a string is returned", () => {
    const node = createNode("string");
    expect(node.name).toEqual("string");
});
