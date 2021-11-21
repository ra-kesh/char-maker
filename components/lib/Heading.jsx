import React from "react";
import styled from "styled-components";
import { variant, space } from "styled-system";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";

const variants = {
  1: {
    color: "text",
    fontFamily: "heading",
    fontWeight: "bold",
    lineHeight: "heading",
    fontSize: "xl",
  },
  2: {
    color: "text",
    fontFamily: "heading",
    fontWeight: "bold",
    lineHeight: "heading",
    fontSize: "l",
  },
  3: {
    color: "text",
    fontFamily: "heading",
    fontWeight: "bold",
    lineHeight: "heading",
    fontSize: "m",
  },
};

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

export const Heading = styled(HeadingBase)(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: "level",
  }),
  space
);

Heading.propTypes = {
  ...propTypes.space,
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
  children: PropTypes.node,
};

{
  /* <Heading level={1}>Quck brown fox jumps over the lazy dog</Heading>
<Heading level={2}>Quck brown fox jumps over the lazy dog</Heading>
<Heading level={3}>Quck brown fox jumps over the lazy dog</Heading>
<Heading level={3} mt={5}>Quck brown fox jumps over the lazy dog</Heading> */
}
