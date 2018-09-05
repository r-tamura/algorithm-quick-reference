import assert from "power-assert";
import { selectionSort } from "./selection-sort";

describe("selection-sort", () => {
  it("should be sorted in accending order", () => {
    const compare = (a, b) => a - b;
    assert.deepEqual(selectionSort([3, 1, 2], compare), [1, 2, 3]);
    assert.deepEqual(selectionSort([4, 5, 7, 8, 10, 1, 9, 2, 6], compare), [
      1,
      2,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});
