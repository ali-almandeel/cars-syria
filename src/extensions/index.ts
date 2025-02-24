import { BASE_FILE_URL } from "../config/env";

type IBuildUrlExtensionProps = {
  action: string;
  payload?: string;
};

declare global {
  interface String {
    buildUrl({ action, payload }: IBuildUrlExtensionProps): string;
    buildImageUrl(): string;
  }
}

// ============ String Extensions ============ -Start-
String.prototype.buildUrl = function buildUrl({
  action,
  payload,
}: IBuildUrlExtensionProps): string {
  const currentUrl = this;
  if (!action) return "".concat("/", currentUrl as string);

  return "".concat(
    "/",
    currentUrl as string,
    action?.replace("{id}", payload ? payload : "")
  );
};

String.prototype.buildImageUrl = function buildImageUrl(): string {
  const currentPath = this;
  const FILE_URL = BASE_FILE_URL;
  return "".concat(FILE_URL as string, "", currentPath as string);
};

export {};
