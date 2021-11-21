import styled from "styled-components";
import PropTypes from "prop-types";
import css from "@styled-system/css";
import { variant } from "styled-system";

const variants = {
  primary: {
    color: "background",
    backgroundColor: "primary",
  },
  secondary: {
    color: "primary",
    backgroundColor: "background",
  },
};

export const Button = styled.button(
  css({
    px: 4,
    py: 3,
    border: `thin`,
    borderColor: "primary",
    borderRadius: "round",
    fontSize: "m",
    fontFamily: "body",
    textDecoration: "none",
    boxSizing: "border-box",
    display: "inline-block",
    textAlign: "center",

    "&:hover:not(:disabled), &:active:not(:disabled), &:focus": {
      outline: 0,
      color: "background",
      borderColor: "accent",
      backgroundColor: "accent",
      cursor: "pointer",
    },

    "&:disabled": {
      opacity: 0.6,
      filter: "saturate(60%)",
    },
  }),
  variant({ variants })
);

Button.propTypes = {
  variant: PropTypes.oneOf(["secondary", "primary"]),
  disabled: PropTypes.bool,
  childrend: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: "secondary",
};

// <Button variant="primary">Primary button</Button>
// <Button variant="secondary">Secondary button</Button>

// Disabled buttons:

// <Button variant="primary" disabled>Primary button</Button>
// <Button variant="secondary" disabled>Secondary button</Button>

// Link buttons:

// <Button variant="primary" as="a" href="/">Primary button</Button>
// <Button variant="secondary" as="a" href="/">Secondary button</Button>
