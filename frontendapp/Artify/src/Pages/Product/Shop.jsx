import CardDemo from './CardDemo'
import Navbar from '@/Pages/Navbar/Navbar'
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/footer";

import AdminNavbar from "../Navbar/AdminNavbar";
import SellerNavbar from "../Navbar/SellerNav";
import { useState, useEffect } from 'react';

export default function Shop() {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Retrieve user role from localStorage when component mounts
    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
  }, []);

  // Render different navbars based on user role
  const renderNavbar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminNavbar />;
      case 'seller':
        return <SellerNavbar />;
      case 'buyer':
        return <UserNavbar />;
      default:
        return <Navbar />;
    }
  };

  return (
    <div>
        {renderNavbar()}
        <div className = "grid grid-cols-3 gap-4">
        <CardDemo title="Ram Lalla" price="8999"/>
        <CardDemo title="Ram Lalla" price="8999"/>
        <CardDemo title="Ram Lalla" price="8999"/>
        </div>
    </div>
  )
}
