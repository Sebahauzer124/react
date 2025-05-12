import { Flex } from "@chakra-ui/react";
import { IoIosCart } from "react-icons/io";
import { useCounterStore } from "../../store";
// import { useContext } from "react";
// import { CartContext } from "../../context";


export const CartWidget = () => {

  // const {cartState} = useCounterStore();
  const cartState = useCounterStore(state => state.cartState);

  // const {cartState} = useContext(CartContext);

  return (
    <Flex
      alignItems={"center"}
      fontSize={25}
      marginRight={"10px"}
      justifyContent={"space-between"}
      width={"50px"}
    >
      <IoIosCart />
      <div>{cartState}</div>
    </Flex>
  );
};
