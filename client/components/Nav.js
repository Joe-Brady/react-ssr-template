import styled from "styled-components";
import Link from "./atoms/Link";

const NavContainer = styled("nav")`
  padding: ${props => props.theme.spacing.medium}
    ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.secondary};
`;

const NavLinkList = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  li {
    padding-right: ${props => props.theme.spacing.small};
  }
`;

const Nav = () => (
  <NavContainer>
    <h1>Nav component</h1>
    <NavLinkList>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/some-page">Some page</Link>
      </li>
    </NavLinkList>
  </NavContainer>
);

export default Nav;
