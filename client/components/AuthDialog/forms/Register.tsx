import React from "react";

import { Button, TextField } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import styles from "../AuthDialog.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(form.formState.errors);

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullname" label={"Name and surname"} />
        <FormField name="email" label={"Email"} />
        <FormField name="password" label={"Password"} />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
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
