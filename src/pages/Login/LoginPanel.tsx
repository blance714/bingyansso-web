import { InputBox } from "../../components/InputBox";
import userSVG from "/src/assets/user.svg";
import lockSVG from "/src/assets/lock.svg";
import { useState } from "react";
import { getToken } from "@/API/user/getToken";
import { setJWT } from "@/tools/jwt";
import { LoginButton, Panel, SignupWrapper } from "./Panel.styled";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import RequestCodeField from "@/components/RequestCodeField";

function login(type: string, params: { [N: string]: string }) {
  return getToken(type, params).then((data) => {
    console.log(`LoginPanel login`, data);
    setJWT(data.user_jwt, data.expire_at);
  });
}

export function PasswordLoginPanel() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigateWithParams = useNavigateWithParams();

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
        onClick={() => 
          login("password", { account, password })
            .then(() => navigateWithParams('/'))
        }
      >
        登 录
      </LoginButton>
      <SignupWrapper>
        <a>忘记密码？</a>
        <span>
          还没有账号，<a onClick={() => navigateWithParams('/register')}>立刻注册</a>
        </span>
      </SignupWrapper>
    </Panel>
  );
}

export function CodeLoginPanel({type} : {type: 'phone' | 'email'}) {
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const navigateWithParams = useNavigateWithParams();

  return (
    <Panel>
      <InputBox
        value={value}
        onChange={e => setValue(e.target.value)}
        logoSrc={userSVG}
        placeholder={ "请输入" + (type === "phone" ? "手机号" : "邮箱") }
        autoComplete={ type === "phone" ? "tel" : "email" }
        inputMode={ type === "phone" ? "tel" : "email" }
      />
      <RequestCodeField
        type={type} code={code}
        onChange={e => setCode(e.target.value)}
        account={code}
      />
      <LoginButton
        onClick={() => 
          login(`${type}_code`, { [type]: value, code })
            .then(() => navigateWithParams('/')) }
      >登 录</LoginButton>
      <SignupWrapper>
        <span></span>
        <span>
          还没有账号，<a onClick={() => navigateWithParams('/register')}>立刻注册</a>
        </span>
      </SignupWrapper>
    </Panel>
  );
}