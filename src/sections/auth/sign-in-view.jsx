import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

// import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';

import { paths } from '../../routes/paths';
import { useBoolean } from '../../hooks/use-boolean';
import Iconwrapper from '../../components/iconwrapper';
import { FormProvider } from '../../components/hook-form';
import { Field } from '../../components/hook-form/fields';
import { useRouter } from '../../routes/hooks/use-router';

// ----------------------------------------------------------------------

// formContent + headerContent + signupContent = return SignInView()

export const SignInSchema = zod.object({
    email: zod
        .string()
        .min(1, { message: 'Email is required!' })
        .email({ message: 'Please enter a valid email address!' }),
    password: zod
        .string()
        .min(1, { message: 'Password is required!' })
        .min(8, { message: 'Please enter a password with at least 8 characters!' }),
});

// ----------------------------------------------------------------------


export default function SignInView() {

    const theme = useTheme();

    const router = useRouter();

    const password = useBoolean();

    const defaultValues = { email: '', password: '' };

    const methods = useForm({
        defaultValues,
        resolver: zodResolver(SignInSchema),
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            router.push(paths.dashboard.root);
        } catch (error) {
            console.error(error);
        }
    });

    const formContent = (

        <Stack spacing={3} direction='column' alignItems='end' >

            <Field.Text name="email" label="Email address" autoFocus />

            <Field.Text
                name="password"
                label="Password"
                type={password.value ? 'text' : 'password'}            
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={password.onToggle} edge="end">
                                <Iconwrapper icon={password.value ? 'eva:eye-fill' : 'eva:eye-off-fill'}  width={24} height={24} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Link
                component={RouterLink}
                color='inherit'
                variant="body2"
                sx={{
                    textDecoration: 'underline',
                }}
            >
                Forgot password?
            </Link>

            <LoadingButton
                fullWidth
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                loadingIndicator="Sign in..."
            >
                Sign in
            </LoadingButton>

        </Stack>
    );

    const headerContent = (
        <>
            <Logo sx={{ height: 80, width: '100%' }} />

            <Stack spacing={1.5} sx={{ mt: 3, mb: 5.5 }}>

                <Typography variant="h4">Sign in to your account</Typography>

                <Typography 
                    variant="body2" 
                    sx={{ color: 'text.secondary' }}
                >
                    Enter your email and password to access your account
                </Typography>
            </Stack>
        </>
    );

    const signupContent = (
        <Stack spacing={1} direction='row' alignItems='center' justifyContent='center' sx={{ mt: 3 }}>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Don´t have an account? 
            </Typography>

            <Link
                component={RouterLink}
                color= { theme.palette.mode === 'light' ? 'primary' : 'secondary' }
                variant="subtitle2"
                to='/auth/sign-up'
            >
                Sign Up
            </Link>
        </Stack>
    );

    return (
        <>
            {headerContent}

            <FormProvider methods={methods} onSubmit={onSubmit}>

                {formContent}

            </FormProvider>

            {signupContent}
        
        </>
    );
}