import React from "react";

import { Button, TextField } from "@material-ui/core";

import styles from "../AuthDialog.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/validations";
interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(form.formState.errors);
  return (
    <div>
      {" "}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          {...form.register("email")}
          helperText={form.formState.errors.email?.message}
          error={!!form.formState.errors.email?.message}
          name="email"
          className="mb-20"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...form.register("password")}
          helperText={form.formState.errors.password?.message}
          error={!!form.formState.errors.password?.message}
          name="password"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          required
        />
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
    </div>
  );
};
