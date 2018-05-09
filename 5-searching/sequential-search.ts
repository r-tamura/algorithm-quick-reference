const equal = <T>(a: T, b: T) => {
  if (a === b) {
    return true;
  }

  if (typeof a === "object" && typeof b === "object") {
    const aEntries = Object.entries(a);
    const bEntries = Object.entries(b);
    if (aEntries.length !== bEntries.length) {
      return false;
    }

    for (const [ak, av] of aEntries) {
      const bv = b[ak];
      if (!equal(av, bv)) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

/**
 * 逐次探索(Sequential Search)
 *
 * ジェネリクスで指定された型の配列を第一引数として受け取り、
 * 第二引数で渡された同型の要素が配列内に存在するかを判定します。
 * 配列内に存在する場合はtrue, 存在しない場合はfalseを返します。
 *
 * @example
 * sequentialSearch([1, 2, 3], 3) // true
 * sequentialSearch([1, 2, 3], 4) // false
 */
const sequentialSearch = <T = Number>(arr: T[], needle: T): Boolean => {
  for (let v of arr) {
    if (equal<T>(v, needle)) {
      return true;
    }
  }
  return false;
};

export default sequentialSearch;
