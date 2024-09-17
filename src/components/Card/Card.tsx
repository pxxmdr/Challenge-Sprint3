import { CardContainer } from "./Card.styled";

interface CardProps {
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <CardContainer>
      <div className={`content ${!image ? "hasImage" : ""}`}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {image && <img src={image?.src} alt={image?.alt} />}
      </div>
      <span>Começe já</span>
    </CardContainer>
  );
};
