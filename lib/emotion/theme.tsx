"use client";
import { ThemeProvider } from "@emotion/react";
import type { FC, ReactNode } from "react";
import type { Theme } from "@emotion/react";

export interface EmotionThemeProviderPorps {
  children: ReactNode;
  theme: Partial<Theme>;
}

const EmotionThemeProvider: FC<EmotionThemeProviderPorps> = ({
  children,
  theme,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EmotionThemeProvider;
