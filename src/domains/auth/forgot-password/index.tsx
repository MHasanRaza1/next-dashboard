"use client";

import { routes } from "@/router/routes";
import { Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const initialValues = {
    email: "",
    image: null,
    birthCertificate: null,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      router.push(routes.dashboard);
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = formik;
  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        name="email"
        variant="outlined"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        helperText={touched.email && errors.email}
        // label={generalMessages.email}
        error={touched.email && Boolean(errors.email)}
        // disabled={loading} // Uncomment and define 'loading' state if needed
        placeholder={"email"}
      />
      <TextField
        fullWidth
        type="file"
        inputProps={{ accept: "image/*" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.currentTarget.files?.[0];
          setFieldValue("image", file);
        }}
        helperText="Upload Image (jpg, png, etc.)"
      />
      <TextField
        fullWidth
        type="file"
        inputProps={{ accept: ".pdf,.doc,.docx" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.currentTarget.files?.[0];
          setFieldValue("birthCertificate", file);
        }}
        helperText="Upload Birth Certificate."
      />
    </Stack>
  );
}
