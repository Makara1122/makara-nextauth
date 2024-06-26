
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/navigationBar";


// If loading a variable font, you don't need to specify the font weight


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   openGraph : {
//     images : "https://i.pinimg.com/736x/48/e3/96/48e3967229c43bc4b39dad194de580ba.jpg"
//   }
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-0 m-0">
        <header className="fixed top-0 h-screen w-full">
          <NavbarComponent />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
