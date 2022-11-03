import React, { useState } from "react";
import Input2 from "../../components/Input2";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";




const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const validate = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    if (!validEmail.test(email)) {
      setInputEmailErr("Por favor digite um email válido!");
      return;

    } else {
      setInputEmailErr(false);
   
    }
    alert("Usuário cadatrado com sucesso!");
    navigate("/");

  };



  return (
    <C.Container>
      
      <C.Content>
      <C.Label>Registre-se!</C.Label>
        <Input2
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError(""), setInputEmailErr("")]}
        />
        
        <Input2
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError(""), setInputEmailErr("")]}
        />
        
        <Input2
          type="text"
          placeholder="Digite seu Nome"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.labelError>{inputEmailErr}</C.labelError>
        <Button Text="Inscrever-se" onClick={validate} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;

