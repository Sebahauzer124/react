import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({ products }) => {
  return products.length !== 0 ? (
    <Box width="100vw" display={"flex"} maxW={"100vw"}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Box>
  ) : (
    <Alert status="info">
      <AlertIcon />
      <AlertTitle>No hay productos para mostrar!</AlertTitle>
      <AlertDescription>No hay productos en la lista.</AlertDescription>
    </Alert>
  );
};
