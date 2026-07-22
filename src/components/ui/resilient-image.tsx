"use client";

import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

const NEUTRAL_BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='16' height='16' fill='%2320201d'/%3E%3C/svg%3E";

type ResilientImageProps = Omit<
  ImageProps,
  "blurDataURL" | "onError" | "placeholder"
> & {
  fallbackLabel?: string;
};

/**
 * Keeps image-led layouts stable while local review crops load or fail.
 * The fallback is a neutral UI state, not replacement product photography.
 */
export function ResilientImage({
  alt,
  fallbackLabel = "Food image",
  ...props
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const accessibleLabel = alt || fallbackLabel;
    return (
      <div
        role={accessibleLabel ? "img" : undefined}
        aria-label={accessibleLabel ? `${accessibleLabel}. Image unavailable.` : undefined}
        aria-hidden={accessibleLabel ? undefined : true}
        className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_35%,rgba(255,163,26,0.12),transparent_55%),var(--surface-2)] p-4 text-center text-text-tertiary"
      >
        <span className="grid justify-items-center gap-2 text-xs font-bold">
          <ImageOff className="size-5 text-brand" aria-hidden="true" />
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      placeholder="blur"
      blurDataURL={NEUTRAL_BLUR_DATA_URL}
      onError={() => setFailed(true)}
    />
  );
}
