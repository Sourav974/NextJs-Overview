import Logo from "./compoents/Logo";
import Navigation from "./compoents/Navigation";

export const metadata = {
  title: "The wil oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* <Logo /> */}
          <Navigation />
        </header>
        {children}
        <footer>Copyright by the Wil Oasis</footer>
      </body>
    </html>
  );
}
