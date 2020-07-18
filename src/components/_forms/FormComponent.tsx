import * as React from "react";
import { useForm } from "react-hook-form";
import {
  FormWrapper,
  Form,
  InputWrapper,
  InputLabel,
  Input,
  TextArea,
} from "./FormComponent.styled";

type FormData = {
  firstName: string;
  lastName: string;
};

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  console.log(watch());
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <InputLabel>Full name</InputLabel>
          <Input name="fullName" ref={register} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Company</InputLabel>
          <Input name="company" ref={register} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>E-mail</InputLabel>
          <Input name="email" ref={register} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Message</InputLabel>
          <TextArea name="message" ref={register} />
        </InputWrapper>
        <button type="submit">SetValue</button>
      </Form>
    </FormWrapper>
  );
};

export default FormComponent;
