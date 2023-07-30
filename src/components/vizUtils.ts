// @ts-ignore
import { instance } from "@viz-js/viz";
import { GraphData, createGraph } from "./graphElements";
// import { Viz } from "./vizTypes";

/**
 *
 * @returns the Viz object to be used to render graphs
 */
export async function getViz() {
    return import("@viz-js/viz").then((module) => module.instance());
}

// async function initialiseViz(graphData: GraphData) {
//     const vizRenderer = await getViz();
//     const initialRender = vizRenderer.renderSVGElement(createGraph(graphData));
//     return [vizRenderer, svgE];
// }

// async function getViz(): Promise<SVGSVGElement> {
//   let returnSVG: SVGSVGElement;
//   await import("@viz-js/viz")
//   .then(module => module.instance())
//   .then(viz => {returnSVG = viz.renderSVGElement(graphString);
//   });
//   return returnSVG
// }
