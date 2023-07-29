// @ts-ignore
import { instance } from "@viz-js/viz"
// import { Viz } from "./vizTypes";



export async function getViz() {
  return import("@viz-js/viz")
  .then(module => module.instance())
  };





// async function getViz(): Promise<SVGSVGElement> {
//   let returnSVG: SVGSVGElement;
//   await import("@viz-js/viz")
//   .then(module => module.instance())
//   .then(viz => {returnSVG = viz.renderSVGElement(graphString);
//   });
//   return returnSVG
// }
