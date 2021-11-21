import styled from "styled-components";
import { Box } from ".";

export const Flex = styled(Box)({
  display: "flex",
});

Flex.propTypes = Box.propTypes;

// import Box from "./Box";
// <Flex>
//   <Box mr={3}>Foo</Box>
//   <Box ml="auto">Bar</Box>
// </Flex>;
