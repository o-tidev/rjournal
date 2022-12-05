import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from "@material-ui/core";

import styles from "./AuthDialog.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MainForm } from "./forms/Main";
import { LoginForm } from "./forms/Login";
import { RegisterForm } from "./forms/Register";

interface AuthDialogProps {
  onClose: () => void;
  open: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, open }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === "main" ? (
                "Log into RJournal"
              ) : (
                <p
                  onClick={() => setFormType("main")}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> To auth
                </p>
              )}
            </Typography>
            {formType == "main" && (
              <MainForm onOpenLogin={() => setFormType("login")} />
            )}
            {formType == "login" && (
              <LoginForm onOpenRegister={() => setFormType("register")} />
            )}
            {formType == "register" && (
              <RegisterForm
                onOpenRegister={() => setFormType("register")}
                onOpenLogin={() => setFormType("login")}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
