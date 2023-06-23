import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";

import { loginUser } from "../services/user.service";

const Login = () => {
  // SETEO LA INFORMACION QUE LE MANDO A BACK
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = { email: user, password };

    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
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
          <label>User name</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="field">
          <label>User password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="field">
          <button>Login</button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
