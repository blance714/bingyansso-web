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
import { Outlet, useSearchParams } from "react-router-dom";
import Login from "../Login";
import { Error } from "../Error";
import { getJWT, setJWT } from "@/tools/jwt";
import { useEffect } from "react";

export function App() {
  const [ searchParams ] = useSearchParams();

  const paramsLegal =
    ["client_id", "response_type", "scope", "redirect_uri"]
      .every(v => searchParams.has(v));

  const [ jwt, expire ] = getJWT();

  useEffect(() => {
    if ( jwt && expire ) {
      if ((new Date().getTime() / 1000) > parseInt(expire)) {
        setJWT();
      }
    }
  }, [jwt, expire]);

  const jwtLegal = jwt && expire && (new Date().getTime() / 1000) <= parseInt(expire);

  return (
    <Application>
      <BingyanLineLogo src={logoLinePng} />
      <BingyanGrayLogo src={logoPng} />
      <AppPanel>
        <BingyanTitle>
          <img src={logoPng} />
          <header>单点登录</header>
        </BingyanTitle>
        { paramsLegal ? (
          jwtLegal ? <div>qwq</div> : <Login />
        ) : <Error /> }
      </AppPanel>
      <Copyright>Powered by Bingyan Studio</Copyright>
    </Application>
  );
}
