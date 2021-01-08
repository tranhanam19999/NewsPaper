export const getArticelAll = async () => {
  let res = await fetch("http://localhost:5000/art/getAll", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let value = await res.json();
  return value;
};
export const getArticelOne = async (id) => {
    let res = await fetch(`http://localhost:5000/art/getById?${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let value = await res.json();
    return value;
   
  };
  export const postcomment = async () => {
    let res = await fetch("http://localhost:5000/cmt/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let value = await res.json();
    return value;
  };
export default { getArticelAll, getArticelOne ,postcomment};
