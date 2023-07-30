
/**
 *
 * @returns the Viz object to be used to render graphs
 */
export async function getViz() {
    return import("@viz-js/viz").then((module) => module.instance());
}
