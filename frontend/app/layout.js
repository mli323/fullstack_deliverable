import localFont from "next/font/local";
import "./globals.css";

const superPixel = localFont({
  src: "./fonts/SuperPixel.woff",
});

//make the body height of full screen
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{height:'100%'}}>
      <body className={`${superPixel.variable}`}>
        {children}
      </body>
    </html>
  );
}
