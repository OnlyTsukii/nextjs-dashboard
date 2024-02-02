import '@/app/ui/global.css'
// The global.css can be imported to any components in application,
// but it is usually good practice to add it to the top-level component.
// In Next.js, this is the root layout located in /app/layout.tsx.
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
