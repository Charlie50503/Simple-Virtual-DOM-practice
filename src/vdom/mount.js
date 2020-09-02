export default ($node, $target) => {
  //替換節點下面的元素
  $target.replaceWith($node);
  return $node;
};
