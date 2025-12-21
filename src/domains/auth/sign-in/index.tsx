"use client";

import PasswordField from "../components/PasswordField";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import RouterLink from "next/link";
import { useFormattedMessage } from "@/theme/FormattedMessage";
import messages from "./messages";
import { SigninFormValues } from "./types";
import { useFormik } from "formik";
import { signinValidationSchema } from "./validationSchema";
import { useRouter } from "next/navigation";
import { routes } from "@/router/routes";

export default function SigninForm() {
  const router = useRouter();
  const generalMessages = {
    signInHeading: useFormattedMessage(messages.signInHeading),
    username: useFormattedMessage(messages.username),
    password: useFormattedMessage(messages.password),
    forgotPasswordLink: useFormattedMessage(messages.forgotPasswordLink),
    signupLink: useFormattedMessage(messages.signupLink),
    usernamePlaceholder: useFormattedMessage(messages.usernamePlaceholder),
    passwordPlaceholder: useFormattedMessage(messages.passwordPlaceholder),
  };

  // Validation messages
  const validationMessages = {
    usernameRequired: useFormattedMessage(messages.usernameRequired),
    passwordRequired: useFormattedMessage(messages.passwordRequired),
  };

  const initialValues: SigninFormValues = {
    username: "",
    password: "",
  };

  const formik = useFormik<SigninFormValues>({
    initialValues,
    validationSchema: signinValidationSchema({ validationMessages }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      router.push(routes.home);
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <Stack spacing={4} sx={{ p: 1 }}>
      <Stack spacing={1}>
        <Typography variant="h5" textAlign={"center"}>
          {generalMessages.signInHeading}
        </Typography>
      </Stack>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Stack spacing={2}>
          <TextField
            fullWidth
            name="username"
            variant="outlined"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={touched.username && errors.username}
            label={generalMessages.username}
            error={touched.username && Boolean(errors.username)}
            // disabled={loading} // Uncomment and define 'loading' state if needed
            placeholder={generalMessages.usernamePlaceholder}
          />
          <PasswordField
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={touched.password && errors.password}
            label={generalMessages.password}
            error={touched.password && Boolean(errors.password)}
            placeholder={generalMessages.passwordPlaceholder}
          />
          <Box>
            <Link
              component={RouterLink}
              href={routes.auth.forgotPassword}
              variant="subtitle2"
            >
              {generalMessages.forgotPasswordLink}
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            // loading={loading}
            disabled={Object.keys(errors).length > 0}
          >
            {generalMessages.signInHeading}
          </Button>
          <Link
            component={RouterLink}
            href={routes.auth.signUp}
            variant="subtitle2"
          >
            {generalMessages.signupLink}
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
