import { FaArrowLeftLong } from "react-icons/fa6";
import { FormContainer, LoginFormContainer } from "./LoginForm.style";

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <h1>Acessar Conta</h1>
      <p>Preencha seus dados de acesso para continuar</p>
      <FormContainer>
        <div className="field">
          <label htmlFor="cpf">
            {" "}
            <FaArrowLeftLong /> CPF ou CNPJ
          </label>
          <input type="text" id="cpf" placeholder="Insira aqui" />
        </div>
        <a href="/">
          <button>Entrar</button>
        </a>
      </FormContainer>
      <p className="createaccount">Crie já sua conta, inserindo seu CPF!</p>
      <div className="remember_me">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">
          Lembrar meu CPF para próximos acessos.
        </label>
      </div>
    </LoginFormContainer>
  );
};
