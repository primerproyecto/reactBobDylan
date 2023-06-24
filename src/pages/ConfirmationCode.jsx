import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { confirmationCodeUser } from "../services/user.service";

const ConfirmationCode = () => {
  // SETEO LA INFORMACION QUE LE MANDO A BACK
  const [confirmationCode, setConfirmationCode] = useState("");

  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setSend(true);
    setRes(
      await confirmationCodeUser({
        email: "primerproyecto@gmail.com",
        confirmationCode: Number(confirmationCode),
      })
    );
    setSend(false);

    console.log("xx", res);
    if (res?.data.testCheckOk) {
      navigate("/canciones");
    } else {
      navigate("/users/register");
      console.log("te hemos baneado");
    }
  };
  useEffect(() => {
    console.log(res);
  }, [res]);

  useEffect(() => {
    console.log("que es send", send);
  }, [send]);

  return (
    <Container text style={{ marginTop: "7em" }}>
      <form
        className="ui form huge"
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={handleFormSubmit}
      >
        <div className="field">
          <label>Confirmation code</label>
          <input
            type="text"
            required
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
        </div>
        <div className="field">
          <button>Volver a mandar código</button>
        </div>

        <div className="field">
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </Container>
  );
};

export default ConfirmationCode;
