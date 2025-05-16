import { Flex } from "@chakra-ui/react";
import { IoIosCart } from "react-icons/io";
import { useProductsStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const totalItems = useProductsStore((state) => state.getTotalItems());
  const navigate = useNavigate();

  return (
    <Flex
      alignItems={"center"}
      fontSize={25}
      marginRight={"10px"}
      justifyContent={"space-between"}
      width={"50px"}
      onClick={() => navigate('/cart')}
    >
      <IoIosCart />
      <div>{totalItems}</div>
    </Flex>
  );
};
