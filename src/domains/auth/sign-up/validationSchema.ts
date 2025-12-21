import * as Yup from "yup";

type ValidationSchemaProps = {
  validationMessages: Record<string, string>;
};

export const signupValidationSchema = ({
  validationMessages,
}: ValidationSchemaProps) => {
  return Yup.object({
    name: Yup.string().required(validationMessages.nameRequired),
    email: Yup.string().required(validationMessages.emailRequired),
    username: Yup.string().required(validationMessages.usernameRequired),
    password: Yup.string().required(validationMessages.passwordRequired),
  });
};
