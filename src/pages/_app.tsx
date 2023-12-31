import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "@/styles/GlobalStyle";

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
