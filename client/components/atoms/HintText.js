import styled from "styled-components";

const HintText = styled("p")`
  color: ${props => props.theme.colours.subtle};
  padding-left: ${props => props.theme.spacing.small};
  border-left: solid ${props => props.theme.spacing.x_small}
    ${props => props.theme.colours.subtle};
`;

export default HintText;
