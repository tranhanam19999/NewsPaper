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
export const postcomment = async (iduser, postid, content) => {
  let body = {
    user: iduser,
    post: postid,
    content: content,
  };
  let res = await fetch("http://localhost:5000/cmt/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  let value = await res.json();
  return value;
};
export const getcommentid = async (postid) => {
  const body = {
    post: postid,
  };
  console.log(postid, "post");
  let res = await fetch(`http://localhost:5000/cmt/getById`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  let value = await res.json();
  return value;
};
export const login = (username, password) => {

  const body = {
    "username": username,
    "password": password
  }
  console.log(body)

  return fetch(`http://localhost:5000/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),

  }).then((res) => {
    console.log(res, "login");
    return res.json().then((value) => {
      return value;
    });
  });
};
export const register = (name, username, password) => {
  let body = {
    fullName: name,
    local: {
      username: username,
      password: password,
    },
  };
  console.log(body, "user");

  return fetch("http://localhost:5000/user/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    console.log(res, "register");
    return res.json().then((value) => {
      return value;
    });
  });
};

export const getUserAll = async () => {
  let res = await fetch("http://localhost:5000/user/getAll", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let value = await res.json();
  return value;
};
export default {
  getArticelAll,
  getArticelOne,
  postcomment,
  getcommentid,
  login,
  getUserAll,
  register,
};
