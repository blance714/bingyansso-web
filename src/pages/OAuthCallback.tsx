import { getToken } from "@/API/user/getToken";
import { setJWT } from "@/tools/jwt";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

function handleOAuth(type: string, code: string) {
  getToken(type, { 
    type: type + "_code", code
  }).then((data) => {
    console.log(`LoginPanel login`, data);
    setJWT(data.user_jwt, data.expire_at);
  });
}

export function OAuthCallback() {
  const { type } = useParams();
  const [ searchParams ] = useSearchParams();
  const code = searchParams.get("code");

  return (
    <Panel>
      { type && code
        ? <div>正在跳转……</div>
        : <div>参数错误。缺少：{(type ? "" : "type") + (code ? "" : "code")}</div>
      }
    </Panel>
  )
}

const Panel = styled.article`
  margin: 0 30px;
`