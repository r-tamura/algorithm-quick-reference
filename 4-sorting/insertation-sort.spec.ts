import * as assert from "power-assert";
import { insertationSort } from "./insertation-sort";

describe("insertationSort", () => {
  it("should be sorted in accending order", () => {
    assert.deepEqual(insertationSort([3, 1, 2]), [1, 2, 3]);
    assert.deepEqual(insertationSort([4, 5, 7, 8, 10, 1, 9, 2, 6]), [
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
