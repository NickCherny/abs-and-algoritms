import createGraph from './graphFactory';
import createNode from './createNode';
import createEdge from './createEdge';

describe('FP-Graph', () => {
  test('check FP Graph base functionals', () => {
    const graph = createGraph<number>(false);
    const nodeA = createNode(1, '1');
    const nodeB = createNode(10, '2');
    graph.addNode(nodeA);
    graph.addNode(nodeB);

    graph.addEdge(createEdge(nodeA, nodeB, 0));

    expect(graph.getNodeByKey(nodeA.key)).toBe(nodeA);
    expect(graph.getNodeByKey(nodeB.key)).toBe(nodeB);
    graph.neighborsForKey(nodeA.key).forEach(item => expect(item).toBe(nodeB));
    expect(graph.toString()).toBe('1,2');
  });
});
