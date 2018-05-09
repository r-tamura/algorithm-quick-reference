import assert from "power-assert";
import sequentialSearch from "./sequential-search";

const obj1 = { k1: "v1", k2: "v2" };
const obj2 = { k1: "v1", k2: "v2", k3: "v3" };
describe("sequentialSearch", () => {
  it("should return true when an array includes the value", () => {
    assert(sequentialSearch([3, 1, 2], 3) === true);
  });

  it("should return false when an array doesn't include the value", () => {
    assert(sequentialSearch([3, 1, 2], 4) === false);
  });

  it("should return true when there is deeply equal object in an array", () => {
    assert(sequentialSearch<object>([obj1, {}, {}], obj1) === true);
  });

  it("should return true when there doesn't exist deeply equal object in an array", () => {
    assert(sequentialSearch<object>([obj2, {}, {}], obj1) === false);
  });
});
