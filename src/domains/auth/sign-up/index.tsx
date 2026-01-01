"use client";

import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import PasswordField from "../components/PasswordField";
import { useRouter } from "next/navigation";
import RouterLink from "next/link";

import { useFormattedMessage } from "@/theme/FormattedMessage";
import messages from "./messages";
import { SignupFormValues } from "./types";
import { signupValidationSchema } from "./validationSchema";
import { useFormik } from "formik";
import { routes } from "@/router/routes";

export default function SignupForm() {
  const router = useRouter();
  const generalMessages = {
    signInHeading: useFormattedMessage(messages.signUnHeading),
    name: useFormattedMessage(messages.name),
    email: useFormattedMessage(messages.email),
    username: useFormattedMessage(messages.username),
    password: useFormattedMessage(messages.password),
    loginLink: useFormattedMessage(messages.loginLink),
    namePlaceholder: useFormattedMessage(messages.namePlaceholder),
    emailPlaceholder: useFormattedMessage(messages.emailPlaceholder),
    usernamePlaceholder: useFormattedMessage(messages.usernamePlaceholder),
    passwordPlaceholder: useFormattedMessage(messages.passwordPlaceholder),
  };

  // Validation messages
  const validationMessages = {
    nameRequired: useFormattedMessage(messages.nameRequired),
    emailRequired: useFormattedMessage(messages.emailRequired),
    usernameRequired: useFormattedMessage(messages.usernameRequired),
    passwordRequired: useFormattedMessage(messages.passwordRequired),
  };

  const initialValues: SignupFormValues = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const formik = useFormik<SignupFormValues>({
    initialValues,
    validationSchema: signupValidationSchema({ validationMessages }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      router.push(routes.dashboard);
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
            name="name"
            variant="outlined"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={touched.name && errors.name}
            label={generalMessages.name}
            error={touched.name && Boolean(errors.name)}
            // disabled={loading} // Uncomment and define 'loading' state if needed
            placeholder={generalMessages.namePlaceholder}
          />
          <TextField
            fullWidth
            name="email"
            variant="outlined"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            helperText={touched.email && errors.email}
            label={generalMessages.email}
            error={touched.email && Boolean(errors.email)}
            // disabled={loading} // Uncomment and define 'loading' state if needed
            placeholder={generalMessages.emailPlaceholder}
          />
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
            href={routes.auth.signIn}
            variant="subtitle2"
          >
            {generalMessages.loginLink}
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
