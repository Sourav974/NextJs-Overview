import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The wil oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
        <footer>Copyright by the Wil Oasis</footer>
      </body>
    </html>
  );
}
