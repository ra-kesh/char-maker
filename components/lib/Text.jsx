import styled from "styled-components";
import { color, typography, space, layout, variant } from "styled-system";
import PropTypes from "prop-types";

const variants = {
  body: {
    fontFamily: "body",
    fontSize: "m",
    fontWeight: "normal",
    lineHeight: "body",
    color: "text",
  },
  disclaimer: {
    fontFamily: "body",
    fontSize: "s",
    fontWeight: "normal",
    lineHeight: "body",
    color: "secondary",
  },
  error: {
    fontFamily: "body",
    fontSize: "m",
    fontWeight: "normal",
    lineHeight: "body",
    color: "error",
  },
};

export const Text = styled.p(
  {
    margin: 0,
  },
  variant({ variants }),
  color,
  typography,
  space,
  layout
);

Text.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: "body",
};

// <Text variant="body">Quck brown fox jumps over the lazy dog</Text>
// <Text variant="disclaimer">Quck brown fox jumps over the lazy dog</Text>
// <Text variant="error">Quck brown fox jumps over the lazy dog</Text>
// <Text>Quck brown fox jumps over the lazy dog</Text>
// <Text color="primary" fontWeight="bold">Quck brown fox jumps over the lazy dog</Text>
