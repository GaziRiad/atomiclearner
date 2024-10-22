"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function GetNavbar(props) {
  const pathname = usePathname();

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
