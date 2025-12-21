/*
 * SignUp Messages
 *
 * This contains all the text for the SignUp component.
 */
import { defineMessages } from "react-intl";
const scope = "app.components.auth.SignUp";
export default defineMessages({
  signUnHeading: {
    id: `${scope}.signUnHeading`,
    defaultMessage: "Sign up",
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: "Name",
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: "Email",
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: "Username",
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: "Password",
  },
  loginLink: {
    id: `${scope}.loginLink`,
    defaultMessage: "Already have an account? Sign in",
  },

  // Placeholders
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: "Enter your name",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your email",
  },
  usernamePlaceholder: {
    id: `${scope}.usernamePlaceholder`,
    defaultMessage: "Enter your username",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },

  // Validation Messages
  nameRequired: {
    id: `${scope}.nameRequired`,
    defaultMessage: "Name is required",
  },
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: "Email is required",
  },
  usernameRequired: {
    id: `${scope}.usernameRequired`,
    defaultMessage: "Username is required",
  },
  passwordRequired: {
    id: `${scope}.passwordRequired`,
    defaultMessage: "Password is required",
  },
});
