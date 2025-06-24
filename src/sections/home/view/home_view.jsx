import { useForm } from "react-hook-form";

import { Stack, Button, Container } from "@mui/material";

import { paths } from "../../../routes/paths";
import { FormProvider } from "../../../components/hook-form";
import { Field } from "../../../components/hook-form/fields";
import { CustomBreadcrumb } from "../../../components/custom-breadcrumbs/custom-breadcrumb";

export default function HomeView() {


    const methods = useForm();

    return (
        <Container maxWidth={false}>

            <CustomBreadcrumb
                title="Account"
                links={[
                    { name: 'Home', href: paths.dashboard.root },
                    { name: 'Account' },
                ]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />

            <Button
                fullWidth
                variant="outlined"
                color="warning"
                size='large'
                
            >Primary
            </Button>

            <FormProvider methods={methods} onSubmit={methods.handleSubmit((data) => console.log(data))}>

                <Stack spacing={3} sx={{ p: 2 }}>

                    <Field.Text name="name" label="Name" />
                    <Field.Text name="email" label="Email" />
                    <Field.DatePicker name="date" label="Date" />
                    <Field.Checkbox name="checkbox" label="Checkbox" />
                    <Field.AutoComplete name="autocomplete" label="Autocomplete" options={['Option 1', 'Option 2', 'Option 3']} />
                    <Field.RadioGroup
                        row
                        name="addressType"
                        options={[
                            { label: 'Home', value: 'Home' },
                            { label: 'Office', value: 'Office' },
                        ]}
                    />
                    <Field.Switch name="switch" label="Switch" />
                </Stack>
            </FormProvider>
        </Container>
    )
}