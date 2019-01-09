import styled from "styled-components";

const StyledMain = styled("main")`
  padding: ${props => props.theme.spacing.large};
`;

const Main = props => <StyledMain>{props.children}</StyledMain>;

export default Main;
