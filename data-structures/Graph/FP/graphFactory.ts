import { EdgeType } from './createEdge';
import { NodeType } from './createNode';

export type GraphType<T> = {
  addNode: (vertex: NodeType<T>) => number
  getEdgeByKey: (edge: EdgeType<T>) => EdgeType<T>|null
  getNodeByKey: (key: string) => NodeType<T>|null
  addEdge: (edge: EdgeType<T>) => void
  calculateWeight: () => number
  neighborsForKey: (key: string) => Array<NodeType<T>>|[]
  toString: () => string
};

export const createGraph = <T>(isDirected: boolean): GraphType<T> => {
  let nodes: { [key: string]: NodeType<T> } = {};
  let edges: { [key: string]: EdgeType<T> } = {};

  return {
    addNode(node: NodeType<T>) {
      if (!nodes[node.key]) {
        nodes[node.key] = node;
      }
      return Object.keys(nodes).length - 1;
    },
    getEdgeByKey(edge: EdgeType<T>) {
      return edges[edge.getKey()];
    },
    getNodeByKey(key: string) {
      return nodes[key];
    },
    addEdge(edge: EdgeType<T>) {
      const { getFrom, getTo } = edge;
      let startNode = nodes[getFrom().key];
      let endNode = nodes[getTo().key];

      if (!nodes[startNode.key]) {
        this.addNode(startNode = getFrom());
      }

      if (!nodes[endNode.key]) {
        this.addNode(endNode = getTo());
      }

      if (edges[edge.getKey()]) {
        throw new Error('Edge has already been added before');
      } else {
        edges[edge.getKey()] = edge;
      }

      if (isDirected) {
        startNode.addEdge(edge);
      } else {
        startNode.addEdge(edge);
        endNode.addEdge(edge);
      }
    },
    calculateWeight() {
      return Object
        .keys(edges)
        .map(key => edges[key])
        .reduce((acc, { weight }) => acc + weight, 0);
    },
    neighborsForKey(key: string): Array<NodeType<T>> {
      return nodes[key] ? nodes[key].getNeighbors() : [];
    },
    toString() {
      return Object.keys(nodes).toString();
    }
  };
}

export default createGraph;
