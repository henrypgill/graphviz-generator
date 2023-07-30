
// import { useRef } from "react";
import { createGraph, GraphData } from "./graphElements";
import { Viz } from "@viz-js/viz";



export function Graph(graphData: GraphData, viz: Viz): JSX.Element {

  // const svgRef = useRef<SVGSVGElement>()

  const myGraphString = createGraph(graphData)
  console.log(viz);
  
    
    return (
    <div>
      <p>{myGraphString}</p>
    </div>
    );
}
