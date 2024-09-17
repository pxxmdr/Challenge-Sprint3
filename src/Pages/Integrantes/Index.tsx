import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout";

const homeNavegationItems = [
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

const Integrantes = () => {
  return (
    <Layout pageTitle="Manual de peças" navItems={homeNavegationItems}>
      <BreadCrumb
        navigationItems={[
          { path: "/Login", name: "Login" },
          { path: "/", name: "Home" },
          { path: "/ManualDePecas", name: "Manual de peças" },
          { path: "/Integrantes", name: "Integrantes" },
        ]}
      />
      <div style={{textAlign: "center"}}>
      <h1>Nome dos integrantes TURMA 1TDSPX - 2024</h1>
      <p style={{fontSize: "1.5rem"}}>Pedro Henrique Martins dos Reis (RM:555306)</p>
      <p style={{fontSize: "1.5rem"}}>Cleidy Camila Zagarrundo (RM:557158)</p>
      <p style={{fontSize: "1.5rem"}}>Thiago Alves dos Santos de Vicente (RM:556805)</p>
      <p style={{fontSize: "1.5rem"}}>SPRINT 3</p>
      </div>
      
    </Layout>
  );
};

export default Integrantes;