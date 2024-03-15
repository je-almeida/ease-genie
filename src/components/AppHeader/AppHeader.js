"use client";

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"


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

const AppHeader = () => {
  return (
    <header className="flex justify-between fixed z-40 w-full shadow-md px-xxxl py-lg bg-white">
      <div className="flex items-center"> {/* Navigation */}
          <a href="" className="mr-xl">
          <Image src="/assets/logo.svg" width="135" height="48" alt="Ease Genie" priority={true}/> 
          </a>

          {[
            ['Home', '/'],
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
              <span className="material-symbols-rounded">help</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="/settings">
              <span className="material-symbols-rounded">settings</span>
            </Link>
          </Button>
       
        <DropdownMenu>  {/* menu de usuário */}
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-full">
              <Avatar className="h-12 w-12">
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
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/billing">
                  Meu plano
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
