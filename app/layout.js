"use client";

import "./globals.css";
import { Montserrat, Marcellus_SC } from "next/font/google";

import React, { useState } from "react";
import { CustomContext } from "./context/index";

import { TheHeader } from "@/components/TheHeader/TheHeader";
import { TheFooter } from "@/components/TheFooter/TheFooter";

const montserrat = Montserrat({ subsets: ["latin"] });
const marcellus_SC = Marcellus_SC({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Loretta’s Choco",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  const [value, setValue] = useState([]);
  return (
    <CustomContext.Provider value={{ value, setValue }}>
      <html lang="en">
        <body className={montserrat.className}>
          <TheHeader />
          <div>{children}</div>

          <TheFooter />
        </body>
      </html>
    </CustomContext.Provider>
  );
}
