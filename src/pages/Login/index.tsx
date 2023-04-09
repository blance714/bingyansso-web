import { useState } from "react";
import { LoginContent, LoginNav, OAuthLoginPanel } from "./styled";
import { PasswordLoginPanel, CodeLoginPanel } from "./LoginPanel";

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
  const [loginPanel, setLoginPanel] = useState(2); //0: SMS, 1: Mail, 2: Password;
  const location = useLocation()

  const redirectOAuth = (provider: string) => {
    const redirect_uri = encodeURIComponent(
      `${window.location.origin}/oauth/${provider}` + location.search
    );
    const url = thirdOAuth[provider].url + `&redirect_uri=${redirect_uri}`;
    window.location.href = url;
  }

  return (
    <LoginContent>
      <LoginNav>
        {['手机验证', '邮箱验证', '密码登录'].map((typeName, index) => 
          <a
          key={index}
          className={loginPanel === index ? "selected" : ""}
          onClick={() => setLoginPanel(index)}
        >
          {typeName}
        </a>)}
      </LoginNav>

      { loginPanel === 0 ? <CodeLoginPanel type="phone" />
      : loginPanel === 1 ? <CodeLoginPanel type="email" />
      : <PasswordLoginPanel />}

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