import postUser from "@/API/user/postUser";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton, RegsiterContent, Title } from "./styled";
import { InputBox } from "@/components/InputBox";
import RequestCodeField from "@/components/RequestCodeField";

export default function Register() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [account, setAccount] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateWithParams = useNavigateWithParams();

  const handleReigster = async () => {
    if (nickname.length === 0)  setError("Please enter nickname.");
    else if (password.length === 0) setError("Please enter password.");
    else if (password !== confirmPassword) setError("Passwords do not match");
    else if (account.length === 0) setError("Please enter account.");
    else if (code.length === 0) setError("Please enter code.");
    else {
      try {
        setError("");
        setLoading(true);
        const data = await postUser({ nickname, password, account, code, type: "phone_code" });
        console.log(data);
        navigateWithParams('/login');
      } catch(e) {
        setError("Error: " + e);
      }
      setLoading(false);
    }
  }

  return (
    <RegsiterContent>
      <Title>注册冰岩账号</Title>
      <InputBox placeholder="昵称" value={nickname} onChange={e => setNickname(e.target.value)} autoComplete="nickname" />
      <InputBox placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} type="password" autoComplete="new-password" />
      <InputBox placeholder="确认密码" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" autoComplete="new-password" />
      <InputBox placeholder="手机号/邮箱" value={account} onChange={e => setAccount(e.target.value)} />
      <RequestCodeField code={code} onChange={e => setCode(e.target.value)} type={"phone"} account={account} />
      <RegisterButton onClick={handleReigster}>注册</RegisterButton>
    </RegsiterContent>
  )
}

