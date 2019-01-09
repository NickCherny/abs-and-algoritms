import { GraphType } from '../FP/graphFactory';
import { NodeType } from '../FP/createNode';

const findPath = (
  g: GraphType<string>,
  startNode: NodeType<string>,
  endNode: NodeType<string>
) => {
  const topNode = g.getNodeByKey(startNode.key);
  if (!topNode) {
    throw Error('You shoude use start Vertex!');
  }

  const end = g.getNodeByKey(endNode.key);

  if (!end) {
    return topNode;
  }

  const distance: { [key: string]: number } = {};
  let neighbords = startNode.getNeighbors();

  neighbords.forEach(neighbord => {
    const key = `${startNode.key}_${neighbord.key}`;
    const edge = g.getEdgeByKey(key);
    if (!distance[neighbord.key] && edge) {
      distance[neighbord.key] = edge.weight;
    }
  });

  console.log(neighbords);
};

export default findPath;
