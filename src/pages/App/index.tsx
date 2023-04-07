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
import { useOutlet } from "react-router-dom";

export default function App() {
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
        { outlet }
      </AppPanel>
      <Copyright>Powered by Bingyan Studio</Copyright>
    </Application>
  );
}
