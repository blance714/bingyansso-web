import styled from "styled-components";

export const Button = styled.button`
  height: 38px;
  display: block;

  color: ${(props: {buttonType?: string}) => 
    props.buttonType as string === "cancel" ? "orangered" : "white"};
  background-color: ${(props: {buttonType?: string}) => 
    props.buttonType as string === "cancel" ? "transparent" : "#ffb448"};

  border-radius: 38px;
  border: none;

  font-size: 15px;

  cursor: pointer;

  transition: filter 0.22s cubic-bezier(0.65, 0.05, 0.36, 1);
  :hover {
    filter: brightness(1.08);
  }
`;