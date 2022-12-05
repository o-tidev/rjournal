import React from "react";

import { Button, TextField } from "@material-ui/core";

import styles from "../AuthDialog.module.scss";

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister, onOpenLogin
}) => {
  return (
    <div>
      {" "}
      <form>
        <TextField
          className="mb-20"
          size="small"
          label="Full name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className="mb-20"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          required
        />
        <div className="d-flex align-center justify-between">
          <Button color="primary" className="mt-20 mb-20" variant="contained">
            Register
          </Button>
          <Button onClick={onOpenLogin} color="primary" variant="text">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};
