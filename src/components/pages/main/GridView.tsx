import Card from "@/components/common/Card";
import { Product } from "@/utils/api.types";

interface GridViewProps {
  products: Product[];
}

const GridView = ({ products }: GridViewProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-20">
      {products?.map((product) => (
        <Card key={product.id}>
          <Card.Image src={product.thumbnail} alt={product.title} />
          <Card.Rating rating={product.rating} />
          <Card.Title>{product.title}</Card.Title>
          <Card.Content className="line-clamp-2">
            {product.description}
          </Card.Content>
          <Card.Review count={product.reviews.length} />
        </Card>
      ))}
    </div>
  );
};

export default GridView;
