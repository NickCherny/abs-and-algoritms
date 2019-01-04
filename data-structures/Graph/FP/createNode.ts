import { EdgeType } from './createEdge';

export type NodeType<T> = {
  key: string
  value: T
  addEdge: (edge: EdgeType<T>) => void
  deleteEdge: (edge: EdgeType<T>) => void
  deleteAllEdges: () => void
  getEdges: () => Array<EdgeType<T>>
  getNeighbors: () => Array<NodeType<T>>
  getDegree: () => number
};

export const createNode = <T>(
  value: T,
  key: string
): NodeType<T> => {
  let edges: Array<EdgeType<T>> = [];

  function addEdge(edge: EdgeType<T>) {
    if (!edges.includes(edge)) {
      edges.push(edge);
    }
  }

  function deleteEdge(edge: EdgeType<T>) {
    edges = edges.filter(item => item !== edge);
  }

  function getNeighbors() {
    return edges.map(({ getFrom, getTo }) => (getFrom().key === key ? getTo() : getFrom()));
  }

  return {
    key,
    value,
    addEdge,
    deleteEdge,
    deleteAllEdges() {
      edges = [];
    },
    getEdges() {
      return edges;
    },
    getNeighbors,
    getDegree() {
      return edges.length;
    }
  };
}

export default createNode;
