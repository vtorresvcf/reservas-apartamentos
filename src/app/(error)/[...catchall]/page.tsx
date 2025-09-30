// app/[...catchall]/page.tsx
import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound(); // dispara (error)/not-found.tsx
  return null;
}
