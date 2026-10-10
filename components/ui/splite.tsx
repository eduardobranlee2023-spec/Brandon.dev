"use client";

import { lazy, Suspense } from "react";
import type { SplineProps } from "@splinetool/react-spline";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineSceneProps = {
  scene: string;
  className?: string;
  onLoad?: SplineProps["onLoad"];
};

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div
          aria-label="Cargando escena 3D"
          className="flex h-full w-full items-center justify-center"
          role="status"
        >
          <span className="size-7 animate-spin rounded-full border-2 border-white/15 border-t-emerald-200/80" />
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={onLoad} />
    </Suspense>
  );
}
