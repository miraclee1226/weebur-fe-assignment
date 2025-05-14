import Card from "@/components/common/Card";
import { Product } from "@/utils/api.types";

interface ListViewProps {
  products: Product[];
}

const ListView = ({ products }: ListViewProps) => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      {products?.map((product) => {
        const { id, title, thumbnail, rating, description, reviews } = product;
        return (
          <Card key={id}>
            <Card.Image src={thumbnail} alt={title} />
            <Card.Rating rating={rating} />
            <Card.Title>{title}</Card.Title>
            <Card.Content>{description}</Card.Content>
            <Card.Review count={reviews.length} />
          </Card>
        );
      })}
    </div>
  );
};

export default ListView;
