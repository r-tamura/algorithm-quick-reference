import { swap } from "./util";

function selectMax<T = number>(
  array: T[],
  left: number,
  right: number,
  compareFn: (a: T, b: T) => number
) {
  const leftIsGreaterThanRight = (a, b) => compareFn(a, b) > 0;
  let maxPos = left;
  let i = left;
  while (++i <= right) {
    if (leftIsGreaterThanRight(array[i], array[maxPos])) {
      maxPos = i;
    }
  }

  return maxPos;
}

function selectionSort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  const length = array.length;
  for (let i = length - 1; i >= 1; i--) {
    const maxPos = selectMax(array, 0, i, compareFn);
    if (maxPos !== i) {
      swap(array, i, maxPos);
    }
  }
  return array;
}

export { selectionSort };
