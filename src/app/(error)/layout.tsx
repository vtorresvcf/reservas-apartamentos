// app/(error)/layout.tsx
export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative w-screen h-screen">{children}</div>;
}
