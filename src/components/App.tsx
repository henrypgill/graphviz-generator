// this app is built upon the package https://www.npmjs.com/package/@viz-js/viz

import { useEffect, useState } from "react";
import { getViz } from "./vizUtils";
// import { GraphData } from "./graphElements";
// import { getSampleGraphData } from "./sampleGraph";
// import { createGraphString } from "./GraphVizStrings";
import { RenderOptions, RenderResult } from "@viz-js/viz";

export interface Viz {
    get graphvizVersion(): string;
    get formats(): string[];
    get engines(): string[];

    render(src: string, options?: RenderOptions): RenderResult;
    renderString(src: string, options?: RenderOptions): string;
    renderSVGElement(src: string, options?: RenderOptions): SVGSVGElement;
    renderJSON(src: string, options?: RenderOptions): object;
}

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
