import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { LinkText } from '@shared/styles/typography.styled';
import { FooterLink } from '@components/Footer/Footer.styled';
import useTranslation from 'next-translate/useTranslation';
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
    PrivatePolicy,
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
    message: yup.string().required(),
});

const FormComponent = () => {
    const { t, lang } = useTranslation('contact');

    const { register, handleSubmit, errors, watch } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });

    return (
        <FormWrapper>
            <Form action="/" name="contact" method="POST" data-netlify="true">
                <Input type="hidden" name="form-name" value="contact" />
                <InputWrapper marginBottom={16}>
                    <InputLabel>{t('form_name')} *</InputLabel>
                    <InputField className={errors.fullName ? 'error' : ''}>
                        <Input
                            autoComplete="off"
                            name="fullName"
                            ref={register}
                        />
                        <InputError>
                            {errors.fullName?.message && t('error_name')}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>{t('form_company')}</InputLabel>
                    <InputField>
                        <Input
                            autoComplete="off"
                            name="company"
                            ref={register}
                        />
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>{t('form_email')} *</InputLabel>
                    <InputField className={errors.email ? 'error' : ''}>
                        <Input name="email" ref={register} autoComplete="off" />
                        <InputError>
                            {errors.email?.message && t('error_email')}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={24}>
                    <InputLabel>{t('form_message')} *</InputLabel>
                    <InputField>
                        <TextArea name="message" ref={register} />
                    </InputField>
                </InputWrapper>
                <ButtonWrapper>
                    <ButtonForm buttonType="PRIMARY">
                        {t('form_send')}
                    </ButtonForm>
                    <PrivatePolicy>
                        {t('form_agreement')}{' '}
                        <LinkText
                            href="/docs/polityka_prywatnosci.pdf"
                            fontSize="s"
                        >
                            {t('privacy_policy')}
                        </LinkText>{' '}
                        {t('form_owner')}.
                    </PrivatePolicy>
                </ButtonWrapper>
            </Form>
        </FormWrapper>
    );
};

export default FormComponent;
