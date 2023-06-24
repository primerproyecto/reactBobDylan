import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Navigate } from "react-router-dom";

// DE PEDRO

import { registerUser } from "../services/user.service";

const Register = () => {
  // SETEO LA INFORMACION QUE LE MANDO A BACK
  /*   const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("User");
  const [image, setImage] = useState(""); */

  const navigate = useNavigate();

  // DE PEDRO
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    console.log("ques es formdata", formData);

    if (inputFile.length !== 0) {
      // cuando me han hayan puesto una imagen por el input

      const custonFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(custonFormData));
      setSend(false);
      navigate("/confirmationcode");

      //! me llamo al servicio
    } else {
      const custonFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(custonFormData));
      setSend(false);

      console.log("que diablos es res", res);
      /*  navigate("/confirmationcode"); */

      const { value: email } = await Swal.fire({
        title: "Enter your IP address",
        input: "text",
        inputLabel: "Your IP address",
        inputValue: email,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      });

      /* if (ipAddress) {
        Swal.fire(`Your IP address is ${ipAddress}`);
      } */

      /* navigate("/confirmationcode"); */

      ///! me llamo al servicio
    }
  };

  useEffect(() => {
    /* console.log(res); */
  }, [res]);

  useEffect(() => {
    console.log("que es send", send);
  }, [send]);

  /* const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `formulario enviado con el usuario ${user} con la contra ${password} y con el rol ${rol} y esta es la imagen que ha subido ${image}`
    );
  }; */

  return (
    <Container text style={{ marginTop: "7em" }}>
      <form
        className="ui form huge"
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="field">
          <label>User name</label>
          <input
            type="text"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            required
            {...register("email", { required: true })}
          />
        </div>
        <div className="field">
          <label>User password</label>
          <input type="text" {...register("password", { required: true })} />
        </div>
        <div className="field">
          <select {...register("rol")}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <div className="field">
          <label>Imagen de usuario</label>
          <input type="file" id="file-upload" />
        </div>
        {/*
        <div className="field">
          <label>Confirmtion code</label>
          <input type="text" />
        </div>
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>Activar</label>
          </div>
        </div> */}
        <div className="field">
          <button>Register</button>
        </div>
      </form>
    </Container>
  );
};

export default Register;
