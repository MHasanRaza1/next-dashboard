import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import {
  Visibility as EyeIcon,
  VisibilityOff as EyeSlashIcon,
} from "@mui/icons-material";

interface PasswordFieldProps {
  label?: string | React.ReactNode;
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: boolean;
  helperText?: string | boolean;
  placeholder?: string;
}

function PasswordField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText = false,
  placeholder,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <TextField
      name={name}
      type={showPassword ? "text" : "password"}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      fullWidth
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {showPassword ? (
                <EyeIcon
                  cursor="pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeSlashIcon
                  cursor="pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default PasswordField;
