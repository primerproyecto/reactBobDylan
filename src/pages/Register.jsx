import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// DE PEDRO

import { registerUser } from "../services/user.service";

const Register = () => {
  const navigate = useNavigate();

  // DE PEDRO
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  //FUNCION DE MANEJO DEL FORMULARIO
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

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
    }
  };

  useEffect(() => {
    if (send) {
      const kodigodear = async () => {
        console.log("que diablos es res dentro", res);
        const { value: confirmationCode } = await Swal.fire({
          title: "Código de confirmación",
          input: "text",
          inputLabel: "Codigo confirmacion",
          inputPlaceholder: "Cual es tu código de confirmación",
          inputAttributes: {
            maxlength: 6,
            autocapitalize: "off",
            autocorrect: "off",
          },
        });

        if (Number(confirmationCode) === res.data.confirmationCode) {
          navigate("/canciones");
          setSend(false);
        } else {
          Swal.fire({
            title: `You fail it`,
            footer:
              'Volver a la página de <a href="/users/register">Registro</a>',
          });
          setSend(false);
        }
      };
      kodigodear();
    }
  }, [res]);

  useEffect(() => {
    console.log("que es send", send);
  }, [send]);

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
