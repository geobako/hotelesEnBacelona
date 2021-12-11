export const asyncTypes = (typeName, prefix = null) => {
  const name = prefix ? prefix + '_' + typeName : typeName;
  return {
    [typeName]: {
      START: `${name}`,
      SUCCESS: `${name}_SUCCESS`,
      ERROR: `${name}_ERROR`,
    },
  };
};
