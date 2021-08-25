const capitalize = (s: any) => {
  if (typeof s === "string") {
    return (s && s[0].toUpperCase() + s.slice(1)) || "";
  } else if (typeof s === "number") {
    return s.toLocaleString();
  } else {
    return s;
  }
};

const booleanArrayHandler = (boolArray: boolean[], id: number) => {
  return boolArray.map((el: boolean, index: number) => {
    return index === id - 1 ? el : !el;
  });
};

export { capitalize, booleanArrayHandler };
