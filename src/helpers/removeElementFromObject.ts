export function removeElement<T>(obj: T, key: string): T {
  delete obj[key];
  return obj;
}
