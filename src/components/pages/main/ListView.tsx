import Card from "@/components/common/Card";
import { Product } from "@/utils/api.types";

interface ListViewProps {
  products: Product[];
}

const ListView = ({ products }: ListViewProps) => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      {products?.map((product) => (
        <Card key={product.id}>
          <Card.Image src={product.thumbnail} alt={product.title} />
          <Card.Rating rating={product.rating} />
          <Card.Title>{product.title}</Card.Title>
          <Card.Content>{product.description}</Card.Content>
          <Card.Review count={product.reviews.length} />
        </Card>
      ))}
    </div>
  );
};

export default ListView;
