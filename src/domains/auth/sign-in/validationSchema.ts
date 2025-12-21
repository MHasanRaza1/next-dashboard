import * as Yup from "yup";

type ValidationSchemaProps = {
  validationMessages: Record<string, string>;
};

export const signinValidationSchema = ({
  validationMessages,
}: ValidationSchemaProps) => {
  return Yup.object({
    username: Yup.string().required(validationMessages.usernameRequired),
    password: Yup.string().required(validationMessages.passwordRequired),
  });
};
