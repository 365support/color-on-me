import { forwardRef, ReactNode, LegacyRef, HTMLAttributes } from "react";
import { css } from "@emotion/react";

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[];
};

const CenteredLayout = (
  { children, ...args }: DefaultLayoutProps,
  ref: LegacyRef<HTMLDivElement>
) => {
  return (
    <div css={mainContainer} ref={ref} {...args}>
      <main css={innerContainer}>{children}</main>
    </div>
  );
};

const mainContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const innerContainer = css`
  width: 100%;
  height: 100%;
  max-width: 520px;
  max-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default forwardRef(CenteredLayout);
