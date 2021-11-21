import styled from "styled-components";
import css from "@styled-system/css";

export const Link = styled.a(
  css({
    "&, &:link, &:visited": {
      padding: 0,
      background: "none",
      border: 0,
      font: "inherit",
      textDecoration: "underline",
      color: "primary",
    },
    "&:hover, &:active, &:focus": {
      color: "accent",
      cursor: "pointer",
    },
    "&:focus": {
      outline: "1px dashed",
      outlineOffset: 1,
    },
  })
);

{
  /* <Text>
  <Link href="/">Just a link</Link>
</Text>; */
}
