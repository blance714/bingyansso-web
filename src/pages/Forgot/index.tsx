import { InputBox } from "@/components/InputBox";
import { ForgotContent, SubmitButton, Title } from "./styled";
import { useState } from "react";


import RequestCodeField from "@/components/RequestCodeField";
import { putUnloginPassword } from "@/API/user/putPassword";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";

import userSVG from "@/assets/user.svg";
import messageSVG from "@/assets/message-code.svg";
import lockSVG from "@/assets/lock.svg";

export function Forgot() {
  const navigateWithParams = useNavigateWithParams();

  const [code, setCode] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    await putUnloginPassword(account, "phone_code", code, password);
    navigateWithParams('/login');
  }

  return <ForgotContent>
    <Title>忘记密码？</Title>
    <InputBox
        placeholder="请输入手机号/邮箱"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        logoSrc={userSVG}
        autoComplete="username"
        // inputMode="email"
      />
    <RequestCodeField //TODO: Distinguish phone and email
        code={code}
        onChange={(e) => setCode(e.target.value)}
        logoSrc={messageSVG}
        type={"phone"}
        account={account}
      />
    <InputBox
        placeholder="请输入新密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        logoSrc={lockSVG}
        autoComplete="new-password"
        type="password"
      />
    <SubmitButton onClick={handleSubmit}>重置密码</SubmitButton>
  </ForgotContent>
}