"use client";

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Button } from "~/components/ui/button"



/**
 * @param {string} linkUrl
 */
const activeNavLink = (linkUrl) => {
  
  const currentPath = usePathname();
  const styles = "body-lg px-lg rounded-full hover:no-underline";
  const notActive = "hover:font-medium hover:text-secondaryDark";
  const active = "text-secondaryDark font-medium bg-primary mx-sm";

  if(currentPath == linkUrl)
  {
    return styles + " " +active
  } 
  else 
  {
    return styles + " " + notActive
  }
}

const SiteHeader = () => {
  return (
    <header className="flex justify-between fixed z-40 w-full shadow-md px-xxxl py-lg bg-white">
      <div className="flex items-center"> {/* Navigation */}
          <a href="" className="mr-xl">
          <Image src="/assets/logo.svg" width="135" height="48" alt="Ease Genie" priority={true}/> 
          </a>

          {[
            ['Home', '/'],
            ['Soluções', '/features'],
            ['Preços', '/pricing'],
            ['Blog', '/blog'],
            ['Ajuda', '/help'],
          ].map(([title, url]) => {
            const href = url || '/';
            return (
              <Link key={"navLink"+title} href={href} className={activeNavLink(href)}>{title}</Link>
            );
          })}

      </div>
      <div className="flex items-center space-x-sm"> {/* User menu */}

          <Link href="/login" className={activeNavLink("/login")}> 
            <span className="material-symbols-rounded">login</span>
            Login 
          </Link>

          <Button asChild>
            <Link href="/settings">Comece gratuitamente</Link>
          </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
