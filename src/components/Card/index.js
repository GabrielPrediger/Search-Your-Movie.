import { Container, Img, Div, Title, Type } from "./index.style";
import noImage from './utils/no-image-available.png';


export default function Card({ image, title, year, type }) {
  return (
    <Container>
      {image === "N/A" ? (
        <Img src={noImage} alt={title} />
      ) : (
        <Img src={image} alt={title} />
      )}

      <Div>
        <Title>{title} ({year}) </Title>
        <Type>{type}</Type>
      </Div>
    </Container>
  );
}