import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import AppRoutes from "./routes/AppRoutes";

export interface RootProps{
  name: string;
}

export default function Root(props: RootProps) {
  return (
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FluentProvider>
  );
}