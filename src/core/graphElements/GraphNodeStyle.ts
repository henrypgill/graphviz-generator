export interface NodeStyle {
    style?: string;
    color?: string;
    fillcolor?: string;
    fontcolor?: string;
    fontsize?: string;
    label?: string;
    shape?: string;
}
export function createNodeStyle(
    style?: string,
    color?: string,
    fillcolor?: string,
    fontcolor?: string,
    fontsize?: string,
    label?: string,
    shape = "box"
) {
    return {
        style: style,
        color: color,
        fillcolor: fillcolor,
        fontcolor: fontcolor,
        fontsize: fontsize,
        label: label,
        shape: shape,
    };
}
