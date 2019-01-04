import { IEdge } from './Edge';

export interface IVertex<T> {
  key: string
  value: T
  addEdge: (edge: IEdge<T>) => this
  deleteEdge: (edge: IEdge<T>) => this
  getEdges: () => Array<IEdge<T>>
  getNeighbors: () => Array<IVertex<T>>
  getDegree: () => number
  deleteAllEdges: () => void
};

class Vertex<T> implements IVertex<T> {
  public key: string;
  public value: T;
  public edges: Array<IEdge<T>>;

  constructor(value: T, key: string) {
    this.value = value;
    this.key = key;
    this.edges = [];
  }

  addEdge(edge: IEdge<T>) {
    if (!this.edges.includes(edge)) {
      this.edges.push(edge);
    }

    return this;
  }

  deleteEdge(edge: IEdge<T>) {
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
