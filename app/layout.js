import localFont from "next/font/local";
import "./globals.css";

const tenorSans = localFont({
  src: "./fonts/TenorSans-Regular.ttf",
  variable: "--font-tenor-sans",
})

const latoBold = localFont({
  src: "./fonts/Lato-Bold.ttf",
  variable: "--font-lato-bold",
})

const latoRegular = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato-regular",
})

const latoLight = localFont({
  src: "./fonts/Lato-Light.ttf",
  variable: "--font-lato-light",
})

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "200, 300, 400",
})

export const metadata = {
  title: "MSW",
  description: "MSW Event Planner and Decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tenorSans.variable} ${latoBold.variable} ${latoRegular.variable} ${latoLight.variable} ${inter.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
