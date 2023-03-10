import styled from "styled-components";
import logoPng from '/src/assets/bingyan.png';

export const Application = styled.main`
  background-color: #FFE4B1;
  height: 100vh;
  font-family: 'PingFang SC';
`
// export const TopCover = styled.div`
//   position: absolute;
//   left: 0; right: 0;
//   height: 1.7rem;
//   background-color: #43e7f0;
// `;
// export const WaveImage = styled.img`
//   position: absolute;
//   left: 0;
//   top: 1.7rem;
// `;
// export const Title = styled.div`
//   position: absolute;
//   font-size: 3.4rem;
//   line-height: 3rem;
//   font-weight: lighter;
//   font-family: YouSheBiaoTiHei;
//   left: 0; right: 0;
//   margin: 0 auto;
//   width: fit-content;
//   top: 1.9rem;
//   color: #000000;
// `;
// export const Subtitle = styled.div`
//   font-family: sansserif;
//   font-weight: bold;
//   font-size: 1.5rem;
// `;
export const LoginTable = styled.section`
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;
  width: 520px;
  height: 520px;
  border-radius: 10px;
  background-color: #ffffffe9;
  box-shadow: 1px 1px 10px -8px gray;
`

export const BingyanLogo = styled.img`
  position: absolute;
  width: 806.97px;
  opacity: 0.3;
`

export const BingyanLogoLeft = styled(BingyanLogo)`
  right: calc(max(147.5px, 50vw - 608.43px) + 50vw);
  bottom: calc(max(-95.82px, 50vh - 586.82px) + 50vh);
`
export const BingyanLogoRight = styled(BingyanLogo)`
  left: calc(50vw + max(211.26px, 50vw - 544.73px));
  top: calc(50vh + max(-155px, 50vh - 646px));
`

export const LoginTitle = styled.title`
  /* background-color: #6ee5d7; */
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;

  img {
    width: 64.2px;
    height: 64.2px;
    margin: 20px;
  }

  header {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 45px;
    color: #75654E;
  }
`

export const LoginContent = styled.div`
  /* background-color: #f684a4; */
  width: 100%;
  height: 80%;
`

export const LoginNav = styled.nav`
  padding-left: 50px;
  margin: 15px 0;

  a {
    padding: 0 7.3px;

    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;

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

  > section {
    margin: 18px 0;
  }

  > section > img {
    display: inline-block;
    margin: 0 5px;
    width: 35px; height: 35px;
    cursor: pointer;
    /* border-radius: 50%; */
  }
`