/*
 * SignIn Messages
 *
 * This contains all the text for the SignIn component.
 */
import { defineMessages } from "react-intl";
const scope = "app.components.auth.SignIn";
export default defineMessages({
  signInHeading: {
    id: `${scope}.signInHeading`,
    defaultMessage: "Sign in",
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: "Username",
  },
  signupLink: {
    id: `${scope}.signupLink`,
    defaultMessage: "Don't have an account? Sign up",
  },
  forgotPasswordLink: {
    id: `${scope}.forgotPasswordLink`,
    defaultMessage: "Forgot password?",
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: "Password",
  },

  // Placeholders
  usernamePlaceholder: {
    id: `${scope}.usernamePlaceholder`,
    defaultMessage: "Enter your username",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },

  // Validation Messages
  usernameRequired: {
    id: `${scope}.usernameRequired`,
    defaultMessage: "Username is required",
  },
  passwordRequired: {
    id: `${scope}.passwordRequired`,
    defaultMessage: "Password is required",
  },
});
