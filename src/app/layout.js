import { EB_Garamond } from "next/font/google";
import "./globals.css";
import MovieProvider from "@/Context/MovieContext";
import NavBar from "@/Components/NavBar";

const EB = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Movie-App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MovieProvider>
        <body className={`scroll-smooth ${EB.className}`}>
          <NavBar/>
          {children}
        </body>
        </MovieProvider>
    </html>
  );
}
