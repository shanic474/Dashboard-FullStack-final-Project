// import axios from "axios";

async function updateDataInDB(id,type, updatedData) {
  let path = `products/updateProduct/:${id}`;

  if (type === "user") path = `users/updateuser/:${id}`;

  console.log("the id is ", id);
  console.log("the path is: ", path);

  // return await axios.post(`/api/${path}?${id}`, formData);
}

export default updateDataInDB;
