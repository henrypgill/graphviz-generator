// this app is built upon the package https://www.npmjs.com/package/@viz-js/viz

import { useEffect, useState } from "react";
import { getViz } from "./vizUtils";
// import { GraphData } from "./graphElements";
import { Viz } from "@viz-js/viz";
// import { getSampleGraphData } from "./sampleGraph";
// import { createGraphString } from "./GraphVizStrings";

function App() {
    // const [graphData, setGraphData] = useState<GraphData>(getSampleGraphData())
    const [viz, setViz] = useState<Viz>();
    // const graphString = createGraphString(graphData)

    useEffect(() => {
        async function startViz() {
            getViz().then((result) => setViz(result));
        }
        startViz();
    }, []);

    if (viz === undefined) {
        return <div className="App"></div>;
    } else {
        console.log(viz.renderSVGElement("digraph { a -> b }"));
        const svgInnerHTML = {
            __html: viz.renderSVGElement("digraph { a -> b; \n b -> {c d} }")
                .innerHTML,
        };
        return (
            <div className="App">
                <svg dangerouslySetInnerHTML={svgInnerHTML}></svg>
            </div>
        );
    }
}

export default App;
