import React from "react";

import { Button, TextField } from "@material-ui/core";

import styles from "../AuthDialog.module.scss";

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  return (
    <div>
      {" "}
      <form>
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
