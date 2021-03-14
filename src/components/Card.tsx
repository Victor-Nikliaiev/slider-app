import { CardInterface } from "./interfaces";
import { FaQuoteRight } from "react-icons/fa";

const Card = ({ image, name, quote, title, position }: CardInterface) => {
  return (
    <article className={position}>
      <img className="person-img" src={image} alt={name} />
      <h4>{name}</h4>
      <p className="job-title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Card;
