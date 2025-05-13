import Item from "./Item";
import Image from "./Image";
import Rating from "./Rating";
import Title from "./Title";
import Content from "./Content";
import Review from "./Review";

const Card = Object.assign(Item, {
  Image: Image,
  Rating: Rating,
  Title: Title,
  Content: Content,
  Review: Review,
});

export default Card;
