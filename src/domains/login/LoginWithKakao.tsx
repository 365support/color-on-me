import Link from "next/link";
import { css } from "@emotion/react";
import KakaoIcon from "public/icons/kakao.svg";
import { BASE_URL } from "../shared/constants/constants";

const LoginWithKakao = () => {
  return (
    <Link href={`${BASE_URL}/auth/login/kakao`} css={linkStyle}>
      <button css={kakaoLoginButton}>
        <KakaoIcon css={kakaoIcon} />
        카카오로 시작하기
      </button>
    </Link>
  );
};

const kakaoLoginButton = css`
  border-radius: 30px;
  background: #ffe500;
  color: #000000;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const kakaoIcon = css`
  width: 20px;
  height: 20px;
`;

const linkStyle = css`
  text-decoration: none;
`;

export default LoginWithKakao;
