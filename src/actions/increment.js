export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const incrementBy = (numb) => {
  return {
    type: "INCREMENTBY",
    payload: numb,
  };
};
