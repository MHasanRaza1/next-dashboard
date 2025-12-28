import { FormattedMessage } from "@/theme/FormattedMessage";

import { routes } from "@/router/routes";

import messages from "./messages";

// module-registry.ts
export const MODULE_REGISTRY = {
  dashboard: {
    title: <FormattedMessage {...messages.dashboard} />,
    href: routes.dashboard,
    icon: "dashboard",
    key: "dashboard",
  },
} as const;

/**
 * Sub-modules that don't appear in navigation but have their own permissions.
 * These are typically nested under a parent module with dynamic routes.
 */
export const SUB_MODULE_KEYS = [
  "productMeta", // Sub-module of product
] as const;

export type RegistryModuleKey = keyof typeof MODULE_REGISTRY;
export type SubModuleKey = (typeof SUB_MODULE_KEYS)[number];
export type ModuleKey = RegistryModuleKey | SubModuleKey;
