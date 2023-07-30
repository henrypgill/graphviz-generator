

interface GraphNode {
    id: string;
    attributes: Record<string, string>;
}

interface Edge {
    from: string;
    to: string;
    attributes: Record<string, string>;
}

interface Graph {
    GraphNodes: GraphNode[];
    edges: Edge[];
    attributes: Record<string, string>;
}

class DotParser {
    private input: string;
    private currentIndex: number;

    constructor(input: string) {
        this.input = input;
        this.currentIndex = 0;
    }

    parse(): Graph {
        const graph: Graph = { GraphNodes: [], edges: [], attributes: {} };

        while (this.currentIndex < this.input.length) {
            this.skipWhitespace();

            if (this.peek() === "graph" || this.peek() === "digraph") {
                this.parseGraphStatement(graph);
            } else if (this.peek() === "GraphNode") {
                this.parseGraphNodeStatement(graph);
            } else if (this.peek() === "edge") {
                this.parseEdgeStatement(graph);
            } else {
                // Unrecognized statement, skip it
                this.parseUntilNextStatement();
            }
        }

        return graph;
    }

    private parseGraphStatement(graph: Graph): void {
        const isDirected = this.readKeyword() === "digraph";
        graph.attributes.type = isDirected ? "digraph" : "graph";

        this.skipWhitespace();
        this.expect("{");
        this.skipWhitespace();

        while (this.peek() !== "}") {
            const key = this.readIdentifier();
            this.skipWhitespace();
            this.expect("=");
            this.skipWhitespace();
            const value = this.readString();
            graph.attributes[key] = value;
            this.skipWhitespace();
            this.expect(";");
            this.skipWhitespace();
        }

        this.expect("}");
        this.skipWhitespace();
    }

    private parseGraphNodeStatement(graph: Graph): void {
        this.expect("GraphNode");
        this.skipWhitespace();
        this.expect("{");
        this.skipWhitespace();

        const GraphNode: GraphNode = { id: "", attributes: {} };

        while (this.peek() !== "}") {
            const key = this.readIdentifier();
            this.skipWhitespace();
            this.expect("=");
            this.skipWhitespace();
            const value = this.readString();
            GraphNode.attributes[key] = value;
            this.skipWhitespace();
            this.expect(";");
            this.skipWhitespace();
        }

        this.expect("}");
        this.skipWhitespace();
        graph.GraphNodes.push(GraphNode);
    }

    private parseEdgeStatement(graph: Graph): void {
        this.expect("edge");
        this.skipWhitespace();
        this.expect("{");
        this.skipWhitespace();

        const edge: Edge = { from: "", to: "", attributes: {} };

        this.skipWhitespace();
        edge.from = this.readString();
        this.skipWhitespace();
        edge.to = this.readString();

        while (this.peek() !== "}") {
            const key = this.readIdentifier();
            this.skipWhitespace();
            this.expect("=");
            this.skipWhitespace();
            const value = this.readString();
            edge.attributes[key] = value;
            this.skipWhitespace();
            this.expect(";");
            this.skipWhitespace();
        }

        this.expect("}");
        this.skipWhitespace();
        graph.edges.push(edge);
    }

    private readKeyword(): string {
        const start = this.currentIndex;
        while (
            this.currentIndex < this.input.length &&
            this.isAlphaNumeric(this.input[this.currentIndex])
        ) {
            this.currentIndex++;
        }
        return this.input.slice(start, this.currentIndex);
    }

    private readIdentifier(): string {
        const start = this.currentIndex;
        while (
            this.currentIndex < this.input.length &&
            (this.isAlphaNumeric(this.input[this.currentIndex]) ||
                this.input[this.currentIndex] === "_")
        ) {
            this.currentIndex++;
        }
        return this.input.slice(start, this.currentIndex);
    }

    private readString(): string {
        this.expect('"');
        const start = this.currentIndex;
        while (
            this.currentIndex < this.input.length &&
            this.input[this.currentIndex] !== '"'
        ) {
            this.currentIndex++;
        }
        this.expect('"');
        return this.input.slice(start, this.currentIndex);
    }

    private skipWhitespace(): void {
        while (
            this.currentIndex < this.input.length &&
            this.isWhitespace(this.input[this.currentIndex])
        ) {
            this.currentIndex++;
        }
    }

    private parseUntilNextStatement(): void {
        while (
            this.currentIndex < this.input.length &&
            this.input[this.currentIndex] !== ";"
        ) {
            this.currentIndex++;
        }
        this.expect(";");
        this.skipWhitespace();
    }

    private peek(): string {
        return this.input[this.currentIndex];
    }

    private expect(expected: string): void {
        if (this.input[this.currentIndex] !== expected) {
            throw new Error(
                `Expected '${expected}' at position ${this.currentIndex}`
            );
        }
        this.currentIndex++;
    }

    private isAlphaNumeric(char: string): boolean {
        return /[a-zA-Z0-9]/.test(char);
    }

    private isWhitespace(char: string): boolean {
        return /\s/.test(char);
    }
}

// Usage example:
const dotInput = `
  graph myGraph {
    size="4,4";
    GraphNode [shape=circle];
    A -- B [label="Edge from A to B"];
    B -- C;
    C -- A;
  }
`;

const parser = new DotParser(dotInput);
const graph = parser.parse();
console.log(JSON.stringify(graph, null, 2));
