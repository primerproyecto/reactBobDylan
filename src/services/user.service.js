import { updateToken } from "../util/updateToken";
import { APIuser } from "./serviceApiUser";

export const registerUser = async (formData) => {
  return APIuser.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const loginUser = async (formData) => {
  return APIuser.post("/users/login", formData, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(`que da el error, ${error}`);
      return error;
    });
};

export const ConfirmationCodeUser = async (formData) => {
  return APIuser.post("/users/check", formData, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log("que es res", res);
      return res;
    })
    .catch((error) => error);
};
