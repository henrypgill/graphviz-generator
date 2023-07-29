// @ts-ignore
import { instance } from "@viz-js/viz";
import { useState, useEffect } from "react";
import { getViz } from "./setupViz";


export interface GraphSVGElementProps {
  SVGString: string;
}



export function GraphSVGElement({SVGString, viz}: GraphSVGElementProps): JSX.Element{
  const [SVGElement, setSVGElement] = useState<SVGSVGElement>()
  const viz = intialiseGraph()

  async function intialiseGraph() {
    const viz = await getViz()
    setSVGElement(viz.renderSVGElement("digraph { a -> b }"))
    return viz
  }


return (<>{viz.renderSVGElement(SVGString)}</>)
}


