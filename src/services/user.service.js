import { updateToken } from "../util/updateToken";
import { APIuser } from "./serviceApiUser";

export const registerUser = async (formData) => {
  return APIuser.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      console.log("que es res desde register", res);
      return res;
    })
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

export const confirmationCodeUser = async (formData) => {
  return APIuser.post("/users/check", formData, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log("que es res", res);
      /* if (!res.data.check) {
        console.log(
          "el codigo que metiste no era bueno y tendras que volver a registrarte"
        );
      } else {
        console.log(
          "Has rellenado correctamente el código de confirmación y pasas al siguiente nivel"
        );
      } */
      return res;
    })
    .catch((error) => {
      console.log(`No hay ningún usuario con ese correo electrónico.`);
      return error;
    });
};
