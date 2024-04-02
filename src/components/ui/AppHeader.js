"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { Button } from "~/components/ui/button";
import Logout from "../Logout/Logout";


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { 
  CircleHelp,
  Settings,
  Wallet,
  CircleUserRound
 } from "lucide-react";


/**
 * Determines the styling for an active navigation link based on the current path.
 *
 * @param {string} linkUrl - The URL of the navigation link to compare with the current path.
 * @return {string} The combined styles for the navigation link.
 */
const activeNavLink = (linkUrl) => {
  
  const currentPath = usePathname();
  const styles = "px-lg text-md transition-colors hover:text-foreground";
  const active = "text-foreground";

  if(currentPath == linkUrl)
  {
    return styles + " " +active
  } else {
    return styles
  }
}

/**
 * Renders the header component of the application.
 *
 * @return {JSX.Element} The rendered header component.
 */
const AppHeader = () => {

  return (
    <header className="flex justify-between fixed z-40 w-full border-b px-xxxl py-lg bg-white">
      <div className="flex items-center font-medium text-muted-foreground"> {/* Navigation */}
          <a href="" className="mr-xxl">
          <Image src="/assets/logo.svg" width="135" height="48" alt="Ease Genie" priority={true}/> 
          </a>

          {[
            ['Home', '/dashboard'],
            ['Agenda', '/agenda'],
            ['Pacientes', '/patients'],
            ['Financeiro', '/financial'],
          ].map(([title, url]) => (
            <Link key={"navLink"+title} href={url} className={activeNavLink(url)}>{title}</Link>
          ))}

      </div>
      <div className="flex items-center space-x-sm"> {/* User menu */}
        
          <Button asChild variant="ghost" size="icon">
            <Link href="/help">
              <CircleHelp />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="/settings">
              <Settings />
            </Link>
          </Button>
       
        <DropdownMenu>  {/* menu de usuário */}
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar>
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-xs leading-none text-muted-foreground">
                  m@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/profile">
                  <CircleUserRound />
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/billing">
                  <Wallet />
                  Meu plano
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" >
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
