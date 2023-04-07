import { useState } from "react";
import { LoginContent, LoginNav, OAuthLoginPanel } from "./styled";
import { PasswordLoginPanel, SMSLoginPanel } from "./LoginPanel";

import feishuSVG from "@/assets/feishu.svg";
import githubSVG from "@/assets/github.svg";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const thirdOAuth: {[N: string] : { img: string; url: string }} = {
  feishu: {
    img: feishuSVG,
    url: "https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=cli_a49c0b54a7b9d00e&response_type=code",
  },
  github: {
    img: githubSVG,
    url: "https://github.com/login/oauth/authorize?client_id=873405807054de896553",
  },
};

function Login() {
  const [loginPanel, setLoginPanel] = useState(1); //0: Message, 1: Password;
  const location = useLocation()

  const redirectOAuth = (provider: string) => {
    const redirect_uri = encodeURIComponent(
      `https://chen03.github.io/bingyansso-web/oauth/${provider}` + location.search
    );
    const url = thirdOAuth[provider].url + `&redirect_uri=${redirect_uri}`;
    window.location.href = url;
  }

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
          {Object.keys(thirdOAuth).map(key => 
            <a
              onClick={() => redirectOAuth(key)}
              style={{ backgroundImage: `url(${thirdOAuth[key].img})` }}
            />
          )}
        </section>
      </OAuthLoginPanel>
    </LoginContent>
  );
}

export default Login;