interface IGraph {
};

type VertexStoreType<T> = {
  [key: string]: Array<T>
}

class Graph<T> implements IGraph {
  private storage: VertexStoreType<T>;

  constructor () {
    this.storage = {};
  }
}
