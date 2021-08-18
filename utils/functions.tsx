const capitalize = (s: any) => {
  if (typeof s === "string") {
    return (s && s[0].toUpperCase() + s.slice(1)) || "";
  } else if (typeof s === "number") {
    return s.toLocaleString();
  } else {
    return s;
  }
};

export { capitalize };
