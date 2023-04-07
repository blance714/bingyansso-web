import styled from "styled-components";

export const LoginContent = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const LoginNav = styled.nav`
  a {
    margin-left: 8px;
    margin-right: 19px;

    font-size: 15px;

    color: #BDBDBD;
    cursor: pointer;

    position: relative;
    ::before {
      content: "";
      position: absolute;
      width: 0;
      height: 1.5px;
      border-radius: 5px;
      background-color: #FCAC3C;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -2px;

      transition: width 0.2s;
    }

    &.selected {
      color: #FCAC3C;

      ::before {
        width: 17.6px;
      }
    }

    @media (max-width: 450px) {
      margin-left: 0;
      margin-right: 14.44px;
      font-size: 12px;
    }
  }
`

export const OAuthLoginPanel = styled.footer`
  width: fit-content;
  margin: 40px auto;
  font-size: 15px;
  color: #bdbdbd;

  display: flex;
  flex-direction: column;
  align-items: center;

  >section {
    margin: 18px 0;

    >a {
      display: inline-block;
      margin: 0 5px;
      width: 35px; height: 35px;

      background-size: contain;
      cursor: pointer;
    }

    >img:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 450px) {
    margin: 40px 0;
    font-size: 12px;

    align-items: flex-start;

  }
`