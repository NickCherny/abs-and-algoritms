import { IEdge } from './Edge';

export interface IVertex<T> {
  key: string
  value: T
  addEdge: (edge: IEdge) => this
  deleteEdge: (edge: IEdge) => this
  getEdges: () => Array<IEdge>
  getNeighbors: () => Array<IVertex<T>>
  getDegree: () => number
  deleteAllEdges: () => void
};

class Vertex<T> implements IVertex<T> {
  private edges: Array<IEdge> = [];
  public key: string;
  public value: T;

  constructor(value: T, key: string) {
    this.value = value;
    this.key = key;
  }

  addEdge(edge: IEdge) {
    const key = edge.getKey();
    if (this.edges.findIndex(({ getKey }) => getKey() === key) === -1) {
      this.edges.push(edge);
    }

    return this;
  }

  deleteEdge(edge: IEdge) {
    const key = edge.getKey();
    this.edges = this.edges.filter(({ getKey }) => getKey() !== key);

    return this;
  }

  getEdges() {
    return this.edges;
  }

  getNeighbors() {
    const key = this.key;
    return this.edges.map(({ from, to }) => (from.key === key ? to : from));
  }

  getDegree() {
    return this.edges.length;
  }

  deleteAllEdges() {
    this.edges = [];
  }
}

export default Vertex;
