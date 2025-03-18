import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex justify-center items-center p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
