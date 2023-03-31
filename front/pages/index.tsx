import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutAdmin>
      <main className="">
      </main>
    </LayoutAdmin>
  );
}
