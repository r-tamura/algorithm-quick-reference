function swap<T>(array: T[], left: number, right: number) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export { swap };
