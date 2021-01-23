function isPlainObject(value: any): boolean {
  return toString.call(value) === '[object Object]';
};
const res = isPlainObject({ a: 1 });
console.log(res);
