import { InputHTMLAttributes } from "react"
import styled from "styled-components"

export function InputBox({ placeholder, logoSrc, value, onChange, type, ...props } : {
  placeholder?: string,
  logoSrc?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputBoxWrapper>
      <img src={ logoSrc }></img>
      <input type={ type ?? "text" } value={ value } placeholder={ placeholder } onChange={ onChange } {...props} />
      <InputBoxLine />
    </InputBoxWrapper>
  )
}

const InputBoxWrapper = styled.div`
  height: 38px;
  position: relative;
  
  flex-grow: 1;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #DBDBDB;

  img {
    width: 18px;
    margin: 11.3px;
  }

  input {
    /* width: 100%; */
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;

    flex-grow: 1;
    flex-shrink: 1;

    outline: none;

    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;

    ::placeholder {
      color: #dbdbdb;
    }
  }
`

const InputBoxLine = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  background-color: #FCAC3C;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -1px;

  transition: width 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);

  input:focus+& {
    width: 100%;
  }
`