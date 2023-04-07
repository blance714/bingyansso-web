import { authParams, getAuth } from "@/API/oidc/getAuth"
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { Button } from "@/styled";
import { getJWT } from "@/tools/jwt";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import styled from "styled-components"

const requestedParamsName = ['client_id', 'response_type', 'scope', 'redirect_uri'];
const paramsName = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state', 'nonce'];

export default function Auth() {
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const navigateWithParams = useNavigateWithParams();
  const params: authParams | null = useMemo(() => 
    requestedParamsName.some(v => !searchParams.has(v))
    ? null
    : Object.fromEntries(
      paramsName
        .map(v => [v, searchParams.get(v)])
        .filter(([_, v]) => v !== null)
    ), [searchParams]);
  const userJWT = getJWT();

  const [isRedirecting, setIsRedirecting] = useState(false)
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (params === null && import.meta.env.PROD)
      navigate('/error', { state: { message: 'Bad Request' } });
    else if (userJWT === null)
      navigateWithParams('/login');
    setValid(true);
  }, [params]);

  const confirmAuth = async () => {
    setIsRedirecting(true);
    try {
      await getAuth(params!);
      console.log(`Auth confirmed.`);
    } catch(e) {
      console.log(`Auth error:`, e);
    }
  }

  return (
    <Panel>
      { isRedirecting
        ? <div>正在跳转……</div>
        : !valid
        ? <></> 
        : <>
          <Title>“招新系统”想要访问你的冰岩账号</Title>
          <Information>
            <p>如果你授予此权限，<strong>“招新系统”</strong>将能够：</p>
            <ul>
              <li>获取你的冰岩账号的基本信息</li>
            </ul>
          </Information>
          <ButtonWrapper>
            <AuthButton buttonType="confirm" onClick={confirmAuth}>授权</AuthButton>
            <AuthButton buttonType="cancel">取消</AuthButton>
          </ButtonWrapper>
        </>
      }
    </Panel>
  )
}

const Panel = styled.article`
  margin: 0 30px;

  flex: 1;

  display: flex;
  flex-direction: column;
`

const Title = styled.header`
  
`

const Information = styled.section`
  
`

const ButtonWrapper = styled.footer`
  margin: 20px 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`

const AuthButton = styled(Button)`
  width: 90%;
  margin: 12px auto;
`