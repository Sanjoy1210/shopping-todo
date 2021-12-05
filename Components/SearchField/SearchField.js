import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, HStack, Icon, IconButton, Input, NativeBaseProvider, ScrollView, VStack, Text } from 'native-base';
import { Feather, Entypo } from "@expo/vector-icons";

export default function SearchField() {

  const [products, setProducts] = useState(["Milk", "Coffee", "Oranges", "Bread"]);
  const [searchText, setSearchText] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isClear, setIsClear] = useState(false);

  const handleChange = e => {
    setSearchText(e.target.value);
  }

  const handleOnPress = () => {
    const product = [...products, searchText];
    setProducts(product);
    setIsClear(true);
    setSearchText("");
  }

  useEffect(() => {
    const newProducts = products.filter(pd => pd.toLowerCase().includes(searchText));
    setFilterProducts(newProducts);
  }, [searchText])

  return (
    <Box>
      <ScrollView>
        <Flex
          direction="row"
          _text={{ color: "coolGray.800" }}
          fontSize="md"
          mt="2"
          mx="3"
          w={{ base: "100%" }}
        >
          <Input
            onChange={handleChange}
            placeholder="search"
            w={{
              base: "80%",
              md: "90%",
            }}
            mr="3"
            fontSize="14"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            onPress={handleOnPress}
            backgroundColor="#6200ee"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />}
          />
        </Flex>
        <VStack space={2} mt="4">
          {
            filterProducts.map((product, index) => (
              <HStack
                w="100%"
                key={product + index.toString()}
              >
                <Text
                  mx="3"
                >
                  {product}
                </Text>
              </HStack>
            ))
          }
        </VStack>
      </ScrollView>
    </Box>
  )
}
