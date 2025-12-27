import type { Components } from "@mui/material/styles";

import type { Theme } from "../types";

import { MuiAvatar } from "./avatar";
import { MuiButton } from "./button";
import { MuiCard } from "./card";
import { MuiCardContent } from "./card-content";
import { MuiCardHeader } from "./card-header";
import { MuiStack } from "./stack";
import { MuiTab } from "./tab";
import { MuiTextField } from "./textField";

export const components = {
  MuiAvatar,
  MuiButton,
  MuiCard,
  MuiCardHeader,
  MuiCardContent,
  MuiStack,
  MuiTab,
  MuiTextField,
} satisfies Components<Theme>;
