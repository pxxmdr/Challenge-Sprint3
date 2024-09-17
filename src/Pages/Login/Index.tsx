import { Header } from "../../components/Header/Header"
import { LoginForm } from "../../components/LoginForm/LoginForm"

const navegationItems = [
    {
      title: "Sobre nós",
      link: "https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro",
      target: "_blank",
    },
    {
      title: "Ajuda",
      link: "https://www.portoseguro.com.br/canal-de-ajuda",
      target: "_blank",
    },
  ];

const Login = () => {
    return  (
        <>
        <Header navItems={navegationItems}/>
        <LoginForm/>
        </>
    )
}

export default Login