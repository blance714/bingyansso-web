import { Button } from "@/styled";
import styled from "styled-components";

export const Panel = styled.section`
  > * {
    margin: 25px auto;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
`;

export const SignupWrapper = styled.div`
  font-size: 11px;
  color: #bdbdbd;
  margin-top: 15.5px;

  display: flex;
  justify-content: space-between;

  a {
    color: #c78527;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    margin-top: 8px;
  }
`;

export const Turnstile = styled.div`
  position: relative;
  left: calc(50% - 150px);
`