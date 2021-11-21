import styled from "styled-components";
import { Box } from ".";

export const Grid = styled(Box)({
  display: "grid",
});

Grid.propTypes = Box.propTypes;

{
  /* <Grid
  gridGap={3}
  justifyContent={[null, "start"]}
  gridAutoFlow={[null, "column"]}
>
  <span>foo</span>
  <span>bar</span>
  <span>baz</span>
</Grid>; */
}
