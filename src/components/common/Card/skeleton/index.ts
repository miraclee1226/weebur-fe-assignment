import Item from "./Item";
import Image from "./Image";
import Rating from "./Rating";
import Title from "./Title";
import Content from "./Content";
import Review from "./Review";

const Skeleton = Object.assign(Item, {
  Image,
  Rating,
  Title,
  Content,
  Review,
});

export default Skeleton;
