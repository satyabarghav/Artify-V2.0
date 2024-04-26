import Navbar from "../Navbar/Navbar";
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/footer";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import SellerNavbar from "../Navbar/SellerNav";

export default function UserHome() {
  return (
    <div>
      {/* <Navbar /> */}
      <UserNavbar/>
      {/* <SellerNavbar/> */}
      <Hero />
      <Footer />
    </div>
  );
}
