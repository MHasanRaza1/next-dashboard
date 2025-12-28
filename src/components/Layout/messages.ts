/*
 * Layout Messages
 *
 * This contains all the text for the Layout component.
 */
import { defineMessages } from "react-intl";

const scope = "app.components.Layout";

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: "Dashboard",
  },
  signOut: {
    id: `${scope}.signOut`,
    defaultMessage: "Sign Out",
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: "Change Password",
  },
});
