import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import {
    FormWrapper,
    Form,
    InputWrapper,
    InputField,
    InputLabel,
    Input,
    InputError,
    TextArea,
    ButtonForm,
    ButtonWrapper,
} from './FormComponent.styled';

interface IFormInputs {
    fullName: string;
    company: string;
    email: string;
    message: string;
}

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
});

const FormComponent = () => {
    const { register, handleSubmit, errors, watch } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit = handleSubmit((data: IFormInputs) => {
        console.log('Form data ::', data);
    });

    console.log(watch());
    return (
        <FormWrapper>
            <Form onSubmit={onSubmit}>
                <InputWrapper marginBottom={16}>
                    <InputLabel>Full name *</InputLabel>
                    <InputField className={errors.fullName ? 'error' : ''}>
                        <Input
                            autoComplete="off"
                            name="fullName"
                            ref={register}
                        />
                        <InputError>
                            {errors.fullName?.message &&
                                'Twoje dane są wymagane.'}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>Company</InputLabel>
                    <InputField>
                        <Input
                            autoComplete="off"
                            name="company"
                            ref={register}
                        />
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>E-mail *</InputLabel>
                    <InputField className={errors.email ? 'error' : ''}>
                        <Input name="email" ref={register} autoComplete="off" />
                        <InputError>
                            {errors.email?.message &&
                                'Wprowadź poprawny adres email.'}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={24}>
                    <InputLabel>Your message</InputLabel>
                    <InputField>
                        <TextArea name="message" ref={register} />
                    </InputField>
                </InputWrapper>
                <ButtonWrapper>
                    <ButtonForm buttonType="PRIMARY" isGradientBg>
                        Wyślij
                    </ButtonForm>
                </ButtonWrapper>
            </Form>
        </FormWrapper>
    );
};

export default FormComponent;
