import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { useAuth, useCategories } from "../../hooks";
import { Link } from "react-router-dom";
import { createProductsFirestore } from "../../helpers";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { categories, loading } = useCategories();

  const {logout} = useAuth()

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>Daniel's Store</Link>
          </Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorías
            </MenuButton>
            <MenuList overflowY={"scroll"} maxHeight={"400px"}>
              {!loading
                ? categories.map((category) => {
                    return (
                      <MenuItem key={category.slug}>
                        <Link to={`/category/${category.slug}`}>
                          {category.name}
                        </Link>
                      </MenuItem>
                    );
                  })
                : null}
            </MenuList>
          </Menu>

          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              
              <Button onClick={() => createProductsFirestore("categories")}>
                Crear Productos
              </Button>


              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Daniel Alanis</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => {logout()}}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
