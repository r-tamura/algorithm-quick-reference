import { swap } from "./util";
/**
 *  選択ソート Inserertion Sort
 *
 *
 *  1 - n について
 *
 */
function insertationSort<T = Number>(array: T[]): T[] {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    array = insert(array, i, array[i]);
  }
  return array;
}

function insert<T = Number>(array: T[], position: number, value: T): T[] {
  let i = position - 1;
  while (i >= 0 && array[i] > value) {
    swap(array, i, i + 1);
    i = i - 1;
  }
  return array;
}

export { insertationSort };
