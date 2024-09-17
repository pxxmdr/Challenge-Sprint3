import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb";
import { Card } from "../components/Card/Card";
import { InputWithLabel } from "../components/InputWithLabel/InputWithLabel";
import { Layout } from "../components/Layout/Layout";
import { RadioWithLabel } from "../components/RadioWithLabel/RadioWithLabel";
import { TextAreaWithLabel } from "../components/TextAreaWithLabel/TextAreaWithLabel";

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
     O afunilamento se consolida conforme as respostas das perguntas,
            assinale "sim" ou "não" para obter o resultado desejado.
`;
const Home = () => {
  return (
    <Layout pageTitle="Formulário" navItems={homeNavegationItems}>
      <BreadCrumb
        navigationItems={[
          { path: "/Login", name: "Login" },
          { path: "/", name: "Home" },
          { path: "/ManualDePecas", name: "Manual de peças" },
          { path: "/Integrantes", name: "Integrantes" }
        ]}
      />
      <Card
        description={description}
        title="Como funciona o formulário?"
        image={{ src: "FormDivBlue.png", alt: "Form em desenho" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "79px",
        }}
      >
        <TextAreaWithLabel
          label="Detalhe brevemente o ocorrido:"
          inputId="textProblem"
        />
        <InputWithLabel
          label="Qual o ano do veículo?"
          inputId="yearVehicle"
          type="text"
        />
        <InputWithLabel
          label="Qual o modelo?"
          inputId="modelVehicle"
          type="text"
        />
        <InputWithLabel
          label="Quantos KM rodados possui o veículo?"
          inputId="kmVehicle"
          type="text"
        />
        <InputWithLabel
          label="Quando foi feito a última revisão?"
          inputId="revisionVehicle"
          type="text"
        />
        <InputWithLabel
          label="Quando foi feito a última manutenção do veículo?"
          inputId="maintenanceVehicle"
          type="text"
        />
        <InputWithLabel
          label="Quantos KM rodados desde a última manutenção?"
          inputId="kmSinceLastMaintenance"
          type="text"
        />
        <RadioWithLabel label="O carro está ligando?" name="isCarOn" />
        <RadioWithLabel
          label="O carro apresenta barulhos ou ruídos?"
          name="isCarNoise"
        />
        <RadioWithLabel
          label="Está consumindo mais do que antes?"
          name="isCarConsumingMoreThanBefore"
        />
        <RadioWithLabel
          label="Apresenta problemas em painéis ou eletrônicos do carro?"
          name="isCarShowingEletricProblems"
        />
        <RadioWithLabel
          label="A direção está puxando para algum dos lados?"
          name="isCarDirectionPushing"
        />
        <a href="/ManualDePecas">
        <button> Enviar </button></a>
      </div>
      
    </Layout>
  );
};

export default Home;
