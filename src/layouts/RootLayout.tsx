import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leave Management system",
  description:
    "NFQ Learning task Leave Management system frontend using Next Typescript and tailwind css",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={inter.className}>{children}</div>
  );
}
