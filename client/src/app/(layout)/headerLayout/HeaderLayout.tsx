import Link from 'next/link'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import headerlayout from "@/app/ui/headerlayout.module.css";
import SearchbarCompo from '@/components/searchBar/SearchbarCompo';
export default function HeaderLayout() {
  return (
    <div className={headerlayout.navbar}>
       <nav>
        <ul className={headerlayout.ulnav}>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/addcar"> </Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>   
            <Link href="/contactus">Contact us</Link> 
            <Link  href="/addcar">Add car</Link>    </ul>
       </nav>
     <div className={headerlayout.rightnav}>

     <SearchbarCompo customPlaceHolder='Type to search......'/>
       <NotificationsIcon  height={"42px"}/>
     </div>

       
      
    </div>
  )
}
