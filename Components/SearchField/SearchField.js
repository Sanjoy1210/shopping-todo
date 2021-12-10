import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, HStack, Icon, IconButton, Input, NativeBaseProvider, ScrollView, VStack, Text } from 'native-base';
import { Feather, Entypo } from "@expo/vector-icons";

export default function SearchField() {

  const [products, setProducts] = useState(["Milk", "Orange", "Coffee", "Bread"]);
  const [searchText, setSearchText] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const handleChange = e => {
    setSearchText(e.target.value.toLowerCase());
  }

  const handleOnPress = (e) => {
    const product = [...products, searchText];
    setProducts(product);
    setSearchText("");
  }

  useEffect(() => {
    const newProducts = products.filter(pd => pd.toLowerCase().includes(searchText));
    setFilterProducts(newProducts);
  }, [searchText])

  const handleDelete = id => {
    const newProducts = filterProducts.filter((pd, index) => (pd + index.toString()) !== id)
    setFilterProducts(newProducts);
  }

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
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
          />
        </Flex>
        <VStack space={2} mt="4">
          {
            filterProducts.map((product, index) => (
              <HStack
                w="100%"
                key={product + index.toString()}
              >
                <Text mx="3">
                  {product} <IconButton
                    borderRadius="sm"
                    variant="solid"
                    onPress={() => handleDelete(product + index.toString())}
                    backgroundColor="#6200ee"
                    icon={
                      <Icon as={Feather} name="minus" size="sm" color="warmGray.50" />
                    }
                  />
                </Text>
              </HStack>
            ))
          }
        </VStack>
      </ScrollView>
    </Box>
  )
}
