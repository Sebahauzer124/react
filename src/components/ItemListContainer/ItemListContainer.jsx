import { Flex } from '@chakra-ui/react'

export const  ItemListContainer = ({greeting}) => {
    return (
        <Flex
        alignItems={'center'} width={"100%"} height={"100vh"} justifyContent={'center'} fontSize={30} fontWeight={'bold'}>{greeting} </Flex>
    )
}