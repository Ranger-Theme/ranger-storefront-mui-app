import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, ReactNode } from "react";
import type { Options } from "@emotion/cache";
import type { Theme } from "@mui/material/styles";
import type { Theme as EmotionTheme } from "@emotion/react";

import EmotionThemeProvider from "./theme";

export interface EmotionRegistryProps {
  children: ReactNode;
  cacheOptions?: Partial<Options> & {
    enableCssLayer?: boolean;
  };
  muiTheme?: Partial<Theme>;
  emotionTheme?: Partial<EmotionTheme>;
}

const EmotionRegistry: FC<EmotionRegistryProps> = ({
  children,
  cacheOptions = {},
  muiTheme = {},
  emotionTheme = {},
}) => {
  return (
    <AppRouterCacheProvider options={cacheOptions}>
      <ThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
          <CssBaseline />
          {children}
        </EmotionThemeProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default EmotionRegistry;
