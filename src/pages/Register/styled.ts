import { Button } from "@/styled";
import styled from "styled-components";

export const RegsiterContent = styled.section`
  width: 80%;
  margin: 0 auto;

  > * {
    margin: 10px auto;
  }
`

export const Title = styled.h3`
  width: fit-content;
  margin: 10px auto;
`

export const RegisterButton = styled(Button)`
  width: 100%;
`

export const ErrorMessage = styled.div`
  width: fit-content;
  margin: 10px auto;

  color: orangered;
  font-size: 12px;

  transition: opacity 0.3s;
`