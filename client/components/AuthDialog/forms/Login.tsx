import React from "react";

import { Button, TextField } from "@material-ui/core";

import styles from "../AuthDialog.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";
interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(form.formState.errors);
  return (
    <div>
      {" "}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label={"Email"} />
          <FormField name="password" label={"Password"} />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              color="primary"
              className="mt-20 mb-20"
              variant="contained"
            >
              Log in
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Register
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
