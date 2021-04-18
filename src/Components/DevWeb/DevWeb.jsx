import React from "react";
import styled from "styled-components";

import img from "./Under_construction.png";

const StyledDivImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  margin: 10%;
  
`;


function DevWeb() {
  return (
    <StyledDivImage>
      <img src={img} alt="En construction !!!" />
    </StyledDivImage>
  );
}

export default DevWeb;
