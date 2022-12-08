import { TextField } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";

type FormFieldProps = {
  name: string;
  label: string;
};

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <div className="mt-15">
      <TextField
        {...register(name)}
        helperText={formState.errors[name]?.message}
        error={!!formState.errors[name]?.message}
        name={name}
        size="small"
        label={label}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};
