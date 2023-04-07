import styled from "styled-components";
import { InputBox } from "../../components/InputBox";
import userSVG from "/src/assets/user.svg";
import lockSVG from "/src/assets/lock.svg";
import { useState } from "react";
import { getToken } from "@/API/user/getToken";
import { setJWT } from "@/tools/jwt";
import { useNavigate } from "react-router-dom";

function login(type: string, params: { [N: string]: string }) {
  return getToken(type, params).then((data) => {
    console.log(`LoginPanel login`, data);
    setJWT(data.user_jwt, data.expire_at);
  });
}

export function PasswordLoginPanel() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Panel>
      <InputBox
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        logoSrc={userSVG}
        placeholder="请输入用户名/手机号/邮箱"
        autoComplete="username"
        inputMode="email"
      />
      <InputBox
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        logoSrc={lockSVG}
        placeholder="请输入密码"
        type="password"
      />
      <LoginButton
        onClick={() => login("password", { account, password }).then(() => navigate(0)) }
      >
        登 录
      </LoginButton>
      <SignupWrapper>
        <a>忘记密码？</a>
        <span>
          还没有账号，<a>立刻注册</a>
        </span>
      </SignupWrapper>
    </Panel>
  );
}

export function SMSLoginPanel() {
  const SMSWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <Panel>
      <InputBox
        logoSrc={userSVG}
        placeholder="请输入手机号"
        autoComplete="tel"
        inputMode="tel"
      />
      <SMSWrapper>
        <InputBox
          logoSrc={lockSVG}
          placeholder="请输入短信验证码"
          autoComplete="one-time-code"
          inputMode="numeric"
        />
        <RequestSMSButton />
      </SMSWrapper>
      <LoginButton>登 录</LoginButton>
      <SignupWrapper>
        <span></span>
        <span>
          还没有账号，<a>立刻注册</a>
        </span>
      </SignupWrapper>
    </Panel>
  );
}

const Panel = styled.section`
  > * {
    margin: 25px auto;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 38px;
  display: block;
  margin: 0;

  color: white;

  background: #ffb448;
  border-radius: 38px;
  border: none;

  font-size: 15px;

  cursor: pointer;

  transition: filter 0.22s cubic-bezier(0.65, 0.05, 0.36, 1);

  :hover {
    filter: brightness(1.08);
  }
`;

const SignupWrapper = styled.div`
  font-size: 11px;
  color: #bdbdbd;
  margin-top: 15.5px;

  display: flex;
  justify-content: space-between;

  a {
    color: #c78527;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    margin-top: 8px;
  }
`;

function RequestSMSButton() {
  const SMSButton = styled.a`
    color: #c78527;
    font-size: 13px;
    cursor: pointer;
  `;

  const [requesting, setRequesting] = useState(false);

  return (
    <SMSButton
      style={{ opacity: requesting ? 0.3 : 1 }}
      onClick={() => setRequesting(true)}
    >
      {requesting ? "已发送" : "发送验证码"}
    </SMSButton>
  );
}
