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

const description = `
    Ter um conhecimento das peças do seu Auto é tão importante quanto conserva-lo. O manual te ajudará em problemas futuros ou atuais, gerando assim mais conhecimento e praticidade na resolução de seus problemas!
`;
const ManualDePecas = () => {
  return (
    <Layout pageTitle="Manual de peças" navItems={homeNavegationItems}>
      <BreadCrumb
        navigationItems={[
          { path: "/Login", name: "Login" },
          { path: "/", name: "Home" },
          { path: "/ManualDePecas", name: "Manual de peças" },
          { path: "/Integrantes", name: "Integrantes" }
        ]}
      />
      <Card
        title="Guia de peças básico para iniciantes"
        description={description}
      />
    </Layout>
  );
};

export default ManualDePecas;
