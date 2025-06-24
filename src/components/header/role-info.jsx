import { Box, Stack, useTheme, Typography } from "@mui/material";

import { ShortLogo } from "../logo";
import IconWrapper from "../iconwrapper/iconwrapper";

export function RoleInfo({ themeMode = "light" }) {

    const theme = useTheme();

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1.5, sm: 2.5 }}
            sx={{ mr: 1 }}
            
        >
            <ShortLogo theme={themeMode} sx={{ width: 32, height: 32 }} />

            <Box
                component="span"
                sx={{
                    width: 2,
                    height: 20,
                    borderRadius: '1px',
                    bgcolor: 'grey.400',
                }}
            />

            <Stack 
                direction="row" 
                alignItems="center"
                spacing={1}
            >

                <IconWrapper icon="solar:shield-check-bold-duotone" width={28} color={theme.palette.warning.main} />

                <Typography variant="subtitle2" sx={{ color: 'text.primary', userSelect: 'none' }}>
                    Agent
                </Typography>

            </Stack>




        </Stack>
    );
}