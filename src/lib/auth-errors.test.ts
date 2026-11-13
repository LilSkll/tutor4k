import { describe, expect, it } from "vitest";
import { friendlyAuthErrorCode, isAuthErrorCode } from "@/lib/auth-errors";
import { resolveAuthErrorMessage } from "@/lib/resolve-auth-error";
import { translate } from "@/lib/i18n/auth";

describe("friendlyAuthError localization", () => {
  it("maps invalid credentials to a stable code", () => {
    expect(friendlyAuthErrorCode({ message: "Invalid login credentials" })).toBe(
      "auth.error.invalidCredentials",
    );
  });

  it("localizes the same code in ru/en/es/de", () => {
    const code = "auth.error.invalidCredentials";
    expect(isAuthErrorCode(code)).toBe(true);
    const ru = resolveAuthErrorMessage(code, "ru")!;
    const en = resolveAuthErrorMessage(code, "en")!;
    const es = resolveAuthErrorMessage(code, "es")!;
    const de = resolveAuthErrorMessage(code, "de")!;
    expect(ru).toMatch(/Неверный|парол/i);
    expect(en).toMatch(/Wrong email|password/i);
    expect(es).toMatch(/incorrectos|contraseña/i);
    expect(de).toMatch(/Falsche|Passwort/i);
    expect(new Set([ru, en, es, de]).size).toBe(4);
  });

  it("keeps lang when translating empty email/password", () => {
    const code = "auth.error.emailPasswordRequired";
    expect(translate(code, "de")).toMatch(/E-Mail|Passwort/i);
    expect(translate(code, "en")).toMatch(/email|password/i);
  });
});
