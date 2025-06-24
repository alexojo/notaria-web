import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

export function FormProvider({ children, onSubmit, methods }) {

    return (
        <Form {...methods}>
            
            <form onSubmit={onSubmit} noValidate autoComplete="off">
                {children}
            </form>

        </Form>
    );

}

FormProvider.propTypes = {
    children: PropTypes.node,
    methods: PropTypes.object,
    onSubmit: PropTypes.func,
  };
