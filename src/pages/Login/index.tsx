import { useEffect, useState } from "react";
import { LoginContent, LoginNav, OAuthLoginPanel } from "./styled";
import { PasswordLoginPanel, SMSLoginPanel } from "./LoginPanel";
import { getJWT, setJWT } from "@/tools/jwt";

import googleSVG from "@/assets/google.svg";
import githubSVG from "@/assets/github.svg";

const thirdOAuth: { img: string; url: string }[] = [
  {
    img: googleSVG,
    url: "https://accounts.google.com/o/oauth2/v2/auth?client_id=596203162431-ti82fard6njh578kvmlg4fqjjpqacu5r.apps.googleusercontent.com&redirect_uri=http://localhost:5173/bingyansso-web/google-oauth&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email",
  },
  {
    img: githubSVG,
    url: "https://github.com/login/oauth/authorize?client_id=873405807054de896553",
  },
];

function Login() {
  const [loginPanel, setLoginPanel] = useState(1); //0: Message, 1: Password;

  return (
    <LoginContent>
      <LoginNav>
        <a
          className={loginPanel === 0 ? "selected" : ""}
          onClick={() => setLoginPanel(0)}
        >
          验证码登录
        </a>
        <a
          className={loginPanel === 1 ? "selected" : ""}
          onClick={() => setLoginPanel(1)}
        >
          密码登录
        </a>
      </LoginNav>
      {loginPanel === 0 ? <SMSLoginPanel /> : <PasswordLoginPanel />}
      <OAuthLoginPanel>
        <div>第三方账号登录</div>
        <section>
          {thirdOAuth.map((oauth) => (
            <a
              href={oauth.url}
              style={{ backgroundImage: `url(${oauth.img})` }}
            />
          ))}
        </section>
      </OAuthLoginPanel>
    </LoginContent>
  );
}

export default Login;