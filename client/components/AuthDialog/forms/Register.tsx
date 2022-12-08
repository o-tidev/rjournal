import React from "react";

import styles from "../AuthDialog.module.scss";

import { Button, TextField } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../utils/validations";
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
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
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
              disabled={!form.formState.isValid}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              className="mt-20 mb-20"
              variant="contained"
            >
              Register
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Log in
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
