import Card from "@/components/common/Card";
import { Product } from "@/utils/api.types";

interface GridViewProps {
  products: Product[];
}

const GridView = ({ products }: GridViewProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-20">
      {products?.map((product) => {
        const { id, title, thumbnail, rating, description, reviews } = product;
        return (
          <Card key={id}>
            <Card.Image src={thumbnail} alt={title} />
            <Card.Rating rating={rating} />
            <Card.Title>{title}</Card.Title>
            <Card.Content className="line-clamp-2">{description}</Card.Content>
            <Card.Review count={reviews.length} />
          </Card>
        );
      })}
    </div>
  );
};

export default GridView;
