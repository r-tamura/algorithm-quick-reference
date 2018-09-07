import { swap } from "./util";
import { CompareFn } from "./types";

/*
 * Heapは以下の２つの条件を保証するbinary tree:
 * 形の特性(Shape property):
 *  深さkのLeafノードは深さk-1に2^k-1個の全てのノードがあるときのみ存在する。
 *  全てのノードがそろっていない階層では、ノードは「左から右」へ追加されていく。
 *  rootノードは深さ0。
 *
 * Heapの特性(Heap property):
 *  子ノードを持つあるノードは必ずその子ノードよりも大きいもしくは子ノードと等しい値を保持する。
 *
 * This functin ensures that a tree whose root node is array[index]
 */
function heapify<T>(
  array: T[], // ソート対象の配列
  index: number, // ルートとみなすインデックス
  max: number, // 未整列の最終位置インデックス
  compareFn: CompareFn // 要素の大小比較関数
) {
  let toBeParent = index; // Assume that parent A[idx] is larger than or equal to either of its children
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  const shouldLiftUp = <T>(a: T, b: T) => compareFn<T>(a, b) > 0;
  if (left < max && shouldLiftUp(array[left], array[toBeParent])) {
    toBeParent = left; // Left child is larger than its parent
  }

  if (right < max && shouldLiftUp(array[right], array[toBeParent])) {
    toBeParent = right; // Right child is larger than its left sibling
  }

  const isUpdated = (a: number, b: number) => a !== b;
  if (isUpdated(toBeParent, index)) {
    swap(array, index, toBeParent);
    array = heapify(array, toBeParent, max, compareFn);
  }
  return array;
}

function buildHeap<T>(array: T[], compareFn: CompareFn): T[] {
  const n = array.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    array = heapify(array, i, n, compareFn);
  }
  return array;
}

function heapSort<T = number>(array: T[], compareFn: CompareFn): T[] {
  const n = array.length;
  let result = buildHeap([...array], compareFn);
  for (let i = n - 1; i > 0; i--) {
    swap(result, 0, i);
    result = heapify(result, 0, i, compareFn);
  }
  return result;
}

export { heapSort };
