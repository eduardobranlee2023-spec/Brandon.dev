"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

function subscribe(onChange: () => void) {
  window.addEventListener("brandon-theme-change", onChange);
  return () => window.removeEventListener("brandon-theme-change", onChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return null;
}

function setTheme(next: boolean) {
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem("brandon-theme", next ? "dark" : "light");
  } catch {}
  window.dispatchEvent(new Event("brandon-theme-change"));
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  return (
    <div
      className="mat-well relative flex h-[26px] w-[54px] items-center rounded-[8px] p-[3px]"
      role="group"
      aria-label="Tema"
    >
      <span
        aria-hidden
        className="mat-cap absolute left-[3px] top-[3px] h-5 w-6 rounded-[5px] transition-transform duration-[220ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: dark ? "translateX(24px)" : "translateX(0px)",
          opacity: dark === null ? 0 : 1,
        }}
      />
      <button
        type="button"
        onClick={() => setTheme(false)}
        aria-label="Claro"
        aria-pressed={dark === false}
        className="relative z-10 grid h-5 w-6 place-items-center rounded-[5px]"
        style={{ color: dark === false ? "var(--ink)" : "var(--ink-3)" }}
      >
        <SunIcon size={13} weight="fill" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => setTheme(true)}
        aria-label="Oscuro"
        aria-pressed={dark === true}
        className="relative z-10 grid h-5 w-6 place-items-center rounded-[5px]"
        style={{ color: dark === true ? "var(--ink)" : "var(--ink-3)" }}
      >
        <MoonIcon size={13} weight="fill" aria-hidden />
      </button>
    </div>
  );
}
