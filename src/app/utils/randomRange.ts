export function randomRange(from: number, to: number, length: number) {
  if (to - from < length - 1) throw new Error('space not enough to create random array');
  if (to < from) return [];
  const returnArray = [];
  let loopCount = 0;
  while (loopCount < length) {
    const randomInt = Math.floor(Math.random() * (to - from + 1)) + from;
    if (returnArray.indexOf(randomInt) === -1) {
      loopCount++;
      returnArray.push(randomInt);
    }
  }
  return returnArray;
}
