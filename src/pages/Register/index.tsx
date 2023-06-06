import { postUser } from "@/API/user/postUser";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { useMemo, useState } from "react";
import { ErrorMessage, RegisterButton, RegsiterContent, Title } from "./styled";
import { InputBox } from "@/components/InputBox";
import RequestCodeField from "@/components/RequestCodeField";

import userSVG from "@/assets/user.svg";
import lockSVG from "@/assets/lock.svg";
import passwordSVG from "@/assets/password-check.svg"
import smsSVG from "@/assets/sms.svg"
import messageSVG from "@/assets/message-code.svg";

export default function Register() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [account, setAccount] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  // const [type, setType] = useState<"phone_code" | "email_code">("phone_code");
  const [loading, setLoading] = useState(false);

  const navigateWithParams = useNavigateWithParams();

  const type = useMemo(() => {
    if (account.length === 0) return undefined;
    if (account.match(/^\d*$/)) {
      if (account.length !== 11) {
        // setError("Invalid phone number.");
        return "invalid_phone_code";
      } else return "phone_code";
    } else {
      if (!account.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
        // setError("Invalid email address.");
        return "invalid_email_code";
      } else return "email_code";
    }
  }, [account]);

  const displayedError = error
    ? error
      : type === "invalid_phone_code"
      ? "Invalid phone number."
        : type === "invalid_email_code"
        ? "Invalid email address."
        : "　";

  const handleRegister = async () => {
    if (nickname.length === 0) setError("Please enter nickname.");
    else if (password.length === 0) setError("Please enter password.");
    else if (password !== confirmPassword) setError("Passwords do not match");
    else if (account.length === 0) setError("Please enter account.");
    else if (code.length === 0) setError("Please enter code.");
    else if (type) {
      try {
        setError(undefined);
        setLoading(true);
        const data = await postUser({
          nickname, password, account, code, type
        });
        console.log(data);
        navigateWithParams("/login");
      } catch (e) {
        setError("Error: " + e);
      }
      setLoading(false);
    }
  };

  return (
    <RegsiterContent>
      <Title>注册冰岩账号</Title>
      <InputBox
        placeholder="昵称"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        logoSrc={userSVG}
        autoComplete="nickname"
      />
      <InputBox
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        logoSrc={lockSVG}
        type="password"
        autoComplete="new-password"
      />
      <InputBox
        placeholder="确认密码"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        logoSrc={passwordSVG}
        type="password"
        autoComplete="new-password"
      />
      <InputBox
        placeholder="手机号/邮箱"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        logoSrc={smsSVG}
      />
      <RequestCodeField //TODO: Distinguish phone and email
        code={code}
        onChange={(e) => setCode(e.target.value)}
        logoSrc={messageSVG}
        type={"phone"}
        account={account}
      />
      <ErrorMessage style={{ opacity: displayedError !== "　" ? 1 : 0 }}>
        {displayedError}
      </ErrorMessage>
      <RegisterButton onClick={handleRegister}>注册</RegisterButton>
    </RegsiterContent>
  );
}
