import styled from "styled-components";
import { system } from "styled-system";
import PropTypes from "prop-types";
import { Box } from ".";

export const Stack = styled(Box)(
  system({
    gap: {
      property: "&& > * + *",
      scale: "space",
      transform: (value, scale) => ({ marginTop: scale[value] }),
    },
  })
);

Stack.propTypes = {
  ...Box.propProps,
  /** Spacing between children */
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

//
// <Stack gap={3}>
//   <div>eins</div>
//   <div>zwei</div>
//   <div>polizei</div>
// </Stack>
//
