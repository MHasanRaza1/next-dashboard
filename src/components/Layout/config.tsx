import { useEffect, useMemo, useState } from "react";

import { PERMISSIONS_STORAGE_KEY } from "@/constants/configs";

import { MODULE_REGISTRY, RegistryModuleKey } from "./module-registry";
import type { NavItemConfig } from "./types";

type PermissionEntry = { id?: number; name?: string; module?: string };
type PermissionsByModule = Record<string, PermissionEntry[]>;

const NAV_ORDER: RegistryModuleKey[] = ["dashboard"];
const toNavItem = (moduleKey: RegistryModuleKey): NavItemConfig => {
  const { title, href, icon } = MODULE_REGISTRY[moduleKey];
  return { key: moduleKey, title, href, icon };
};

export const fallbackNavItems: NavItemConfig[] = [MODULE_REGISTRY.dashboard];

const hasViewPermission = (
  moduleKey: RegistryModuleKey,
  permissions?: PermissionsByModule | null
): boolean => {
  const modulePermissions = permissions?.[moduleKey];
  if (!modulePermissions?.length) return false;
  return modulePermissions.some(
    (permission) =>
      permission?.name?.endsWith(":view") ||
      permission?.name === `${moduleKey}:view`
  );
};

export const buildNavItemsFromPermissions = (
  permissions?: PermissionsByModule | null
): NavItemConfig[] => {
  if (!permissions) return fallbackNavItems;

  const items: NavItemConfig[] = [MODULE_REGISTRY.dashboard];
  NAV_ORDER.forEach((moduleKey) => {
    if (!MODULE_REGISTRY[moduleKey]) return;
    if (hasViewPermission(moduleKey, permissions)) {
      items.push(toNavItem(moduleKey));
    }
  });

  return items.length ? items : fallbackNavItems;
};

const getNavItemsFromSession = (): NavItemConfig[] => {
  if (typeof window === "undefined") {
    return fallbackNavItems;
  }
  try {
    const stored = sessionStorage.getItem(PERMISSIONS_STORAGE_KEY);
    if (!stored) return fallbackNavItems;
    const parsed = JSON.parse(stored) as PermissionsByModule;
    return buildNavItemsFromPermissions(parsed);
  } catch (error) {
    console.error("Failed to parse permissions from sessionStorage", error);
    return fallbackNavItems;
  }
};

export const usePermissionNavItems = (): NavItemConfig[] => {
  const [items, setItems] = useState<NavItemConfig[]>(fallbackNavItems);

  useEffect(() => {
    setItems(getNavItemsFromSession());
  }, []);

  return useMemo(() => items, [items]);
};

// Default export for places that still consume a static list
export const navItems: NavItemConfig[] = fallbackNavItems;
