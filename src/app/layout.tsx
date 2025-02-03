import "../styles/styles.scss";
import { Montserrat } from "next/font/google";
import Navbar from '../components/Navbar';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
