// import { createNodeString } from "../components/GraphVizStrings";
import {
    createCluster,
    createClusterString,
} from "../core/graphElements/GraphCluster";

test("test a string is returned", () => {
    const node = createNode("string");
    expect(node.name).toEqual("string");
});
