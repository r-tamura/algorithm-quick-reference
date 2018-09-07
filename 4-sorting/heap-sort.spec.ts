import * as assert from "power-assert";
import { heapSort } from "./heap-sort";

describe("heap-sort", () => {
  it("should be sorted in accending order", () => {
    const byAscending = (a, b) => a - b;
    assert.deepEqual(heapSort([3, 1, 2], byAscending), [1, 2, 3]);
    assert.deepEqual(heapSort([4, 5, 7, 8, 10, 1, 9, 2, 6], byAscending), [
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
