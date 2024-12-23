import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const XICon = ({ onClick = () => {} }) => {
  return (
    <Wrapper onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M15 9.50002L10 14.5M10 9.5L15 14.5"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </Wrapper>
  );
};

export default XICon;
