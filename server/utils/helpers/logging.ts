/* eslint-disable no-console */
export const logObjectToDepth = (object: unknown, depth?: number | null) => {
  console.dir(object, { depth });
};

export const logWithDate = (message: string) => {
  console.log(`\n${new Date().toLocaleString()}:\n=> ${message}`);
  return;
};
