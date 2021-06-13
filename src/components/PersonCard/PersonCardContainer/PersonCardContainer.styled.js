import styled from "styled-components";

const PersonCardContainerStyled = styled.div`
  padding:${props => props.primary ? "16px 15px" : "16px 25px"} ;
  background: #FFFFFF;
  border: 1px solid #EDEFF2;
  box-sizing: border-box;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

export default PersonCardContainerStyled;
