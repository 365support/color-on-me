import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { PERSONAL_COLOR } from "../shared/constants/constants";
import { useIsShown } from "../shared/hooks/useIsShown";
import { usePostUser } from "../shared/query/user/user.queries";
import CenteredLayout from "../shared/layout/CenteredLayout";
import Button from "../shared/components/Button";

const MODAL_CLOSE_TIMEOUT = 2000;

const SelectColorPage = () => {
  const router = useRouter();

  const [isShown, onOpen, onClose] = useIsShown();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const { mutate: selectMutate } = usePostUser();

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  const handleStartButtonClick = () => {
    if (!selectedColor) {
      onOpen();
      return;
    }
    selectMutate(selectedColor, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  useEffect(() => {
    if (isShown) {
      const modalCloseTimer = setTimeout(() => {
        onClose();
      }, MODAL_CLOSE_TIMEOUT);
      return () => clearTimeout(modalCloseTimer);
    }
  }, [isShown, onClose]);

  return (
    <CenteredLayout>
      <div css={mainContainer}>
        <div css={mainText}>
          <span css={fontWeight}>퍼스널컬러</span>
          를
          <br />
          선택해주세요 ✍
        </div>

        <div css={subText}>
          나의 퍼스널컬러를 모른다면? <br />
          색상과 분위기가 궁금한 퍼스널컬러를 선택하세요 :-)
        </div>

        <div css={buttonContainer}>
          <div css={gridStyle}>
            {Object.entries(PERSONAL_COLOR).map(([season, colors]) => (
              <div key={season} css={columnStyle}>
                {colors?.map(({ name, color, fontColor }) => (
                  <button
                    key={name}
                    css={css`
                      ${colorButton};
                      background: ${selectedColor === name ? color : "#f4f4f4"};
                      color: ${selectedColor === name ? fontColor : "#000"};
                    `}
                    onClick={() => handleColorSelection(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {isShown && <div css={alertModal}>퍼스널 컬러를 선택해주세요</div>}
        </div>
        <div css={startButtonContainer}>
          <Button variant="colored" onClick={handleStartButtonClick}>
            컬러온미 시작하기
          </Button>
        </div>
      </div>
    </CenteredLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const mainText = css`
  font-size: 30px;
  font-family: "Pretendard";
`;

const fontWeight = css`
  font-weight: 700;
`;

const subText = css`
  color: #99a0a4;
  font-size: 12px;
  font-family: "Pretendard";
  line-height: 18px;
  margin-top: 17px;
  margin-bottom: 38px;
`;

const buttonContainer = css`
  position: relative;
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 42px;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const colorButton = css`
  width: 100%;
  height: 36px;
  border-radius: 30px;
  background: #f4f4f4;
  font-size: 14px;
  font-family: "Pretendard";
  border: none;
  color: #000;
`;

const alertModal = css`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  background-color: #242424a6;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 34px;

  border-radius: 10px;

  color: #fff;
  text-align: center;
  font-size: 12px;
  font-family: "pretendard";
`;

const startButtonContainer = css`
  margin-top: 45px;
`;

export default SelectColorPage;
