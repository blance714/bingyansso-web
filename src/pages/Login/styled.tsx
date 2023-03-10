import styled from "styled-components";

export const Application = styled.main`
  /* background-color: #FFE4B1; */
  width: 100vw;
  height: 100vh;
  font-family: 'PingFang SC';
  overflow: hidden;
  position: relative;

  @media (max-aspect-ratio: 9/16) {
    background-color: #F4F4F4;
  }
`

export const LoginTable = styled.section`
  position: absolute;
  left: calc(50vw - 165px + clamp(0px, 100vw - 650px, 862px) * 0.4 );
  top: 0; bottom: 0;
  margin: auto 0;
  width: 330px;
  height: 520px;
  border-radius: 10px;
  background-color: white;

  @media (max-aspect-ratio: 9/16) {
    width: 314px;
    height: 473.5px;

    box-shadow: 1px 1px 5px #D0D0D0;
  }
`

export const BingyanGrayLogo = styled.img`
  display: none;
  position: absolute;
  width: 640px;
  left: calc(50vw - 320px);
  top: auto;
  bottom: -234.58px;
  filter: grayscale(1) brightness(1.35);

  @media (max-aspect-ratio: 9/16) {
    display: block;
  }
`

export const BingyanLineLogo = styled.img`
  position: absolute;
  width: 885.47px;
  left: calc(50vw - 1100.8px + clamp(0px, 100vw - 650px, 862px) * 0.4);
  top: 0; bottom: 0;
  margin: auto 0;

  @media (max-aspect-ratio: 9/16) {
    display: none;
  }
`

export const LoginTitle = styled.title`
  /* background-color: #6ee5d7; */
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;

  img {
    width: 54.5px;
    height: 54.5px;
    margin: 0 6px 0 20px;
  }

  header {
    font-size: 32px;
    color: #75654E;
  }

  @media (max-aspect-ratio: 9/16) {
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }

    header {
      font-size: 21px;
    }
  }
`

export const LoginContent = styled.div`
  /* background-color: #f684a4; */
  width: 100%;
  height: 80%;
  padding: 0 30px;
  box-sizing: border-box; 
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

    @media (max-aspect-ratio: 9/16) {
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

    >img {
      display: inline-block;
      margin: 0 5px;
      width: 35px; height: 35px;
      cursor: pointer;
    }

    >img:first-child {
      margin-left: 0;
    }
  }

  @media (max-aspect-ratio: 9/16) {
    margin: 40px 0;
    font-size: 12px;

    align-items: flex-start;

  }
`

export const Copyright = styled.footer`
  position: absolute;
  left: 0; right: 0;
  width: fit-content;
  margin: 0 auto;
  bottom: 30.65px;

  font-size: 20px;
  color: #8C8C8C;

  @media (max-aspect-ratio: 9/16) {
    font-size: 12px;
    color: #C5C5C5;
  }
`