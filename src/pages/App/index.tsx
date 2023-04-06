import logoPng from "@/assets/bingyan.png";
import logoLinePng from "@/assets/bingyan-line.png";
import {
  Application,
  BingyanLineLogo,
  BingyanGrayLogo,
  AppPanel,
  BingyanTitle,
  Copyright,
} from "./styled";
import { Outlet, useOutlet, useSearchParams } from "react-router-dom";
import Login from "../Login";
import { Error } from "../Error";
import { getJWT, setJWT } from "@/tools/jwt";
import { PropsWithChildren, useEffect } from "react";
import { Auth } from "../Auth";

export function App() {
  const [ searchParams ] = useSearchParams();

  const paramsLegal = true;
    // ["client_id", "response_type", "scope", "redirect_uri"]
    //   .every(v => searchParams.has(v));

  const jwt = getJWT();
  const outlet = useOutlet();

  return (
    <Application>
      <BingyanLineLogo src={logoLinePng} />
      <BingyanGrayLogo src={logoPng} />
      <AppPanel>
        <BingyanTitle>
          <img src={logoPng} />
          <span>单点登录</span>
        </BingyanTitle>
        { outlet
          ? outlet
          : paramsLegal
          ? (jwt ? <Auth /> : <Login />)
          : <Error />}
      </AppPanel>
      <Copyright>Powered by Bingyan Studio</Copyright>
    </Application>
  );
}
