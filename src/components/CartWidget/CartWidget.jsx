import { Flex } from '@chakra-ui/react'
import { CiShoppingCart } from "react-icons/ci";


export const CartWidget = () => {
    return (<Flex alignItems={'center'} fontSize ={30} marginRight={15} >
    <CiShoppingCart />

    <div>1</div></Flex>)
}