import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const Form = () => {
  const { register, handleSubmit, errors, watch } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  console.log(watch());
  return (
    <form onSubmit={onSubmit}>
      <label>Full name</label>
      <input name="fullName" ref={register} />
      <label>Company</label>
      <input name="company" ref={register} />
      <label>E-mail</label>
      <input name="email" ref={register} />
      <label>Message</label>
      <textarea name="message" ref={register} />
      <button type="submit">SetValue</button>
    </form>
  );
};

export default Form;
