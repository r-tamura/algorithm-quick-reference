import assert from "power-assert"
import insertationSort from "./insertation-sort"

describe("insertationSort", () => {
  it("should return [1, 2, 3]", () => {
    assert.deepEqual(insertationSort([3, 1, 2]), [1, 2, 3])
  })
})
