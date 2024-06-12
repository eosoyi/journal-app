import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { PurpleTheme } from "./purpleTheme";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const AppTheme: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={PurpleTheme}>
            <CssBaseline></CssBaseline>
            {children}
        </ThemeProvider>
    )
}
