import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMain = styled("main")`
  padding: ${props => props.theme.spacing.large};
`;

const Main = props => <StyledMain>{props.children}</StyledMain>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
