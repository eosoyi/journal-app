import { Grid, Typography } from "@mui/material"
import React, { ReactNode } from "react"

interface Props {
    children: ReactNode
    title: string
}

export const AuthLayout: React.FC<Props> = ({ children, title }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >
                <Typography variant="h5" sx={{ mb: 1 }} >{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}
