"use client"

import * as React from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import Logout from "../Logout/Logout";

import {
  LineChart,
  Settings,
  CircleHelp,
  CircleUserRound,
  Receipt,
  UsersRound,
  Calendar,
  Wallet,
} from "lucide-react";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

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

const activeNavLink = (linkUrl) => {
  
  const currentPath = usePathname();
  const styles = "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8";
  const active = "bg-surface4 text-primary";

  if(currentPath == linkUrl)
  {
    return styles + " " +active
  } else {
    return styles
  }
}

const AppNav = () => {

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className="mb-xs"
        >
          <Image src="/assets/logo.svg" width="24" height="64" alt="Ease Genie" priority={true}/>
          <span className="sr-only">Ease Genie</span>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={activeNavLink("/dashboard")}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/agenda"
                className={activeNavLink("/agenda")}
              >
                <Calendar className="h-5 w-5"/>
                <span className="sr-only">Agenda</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Agenda</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/patients"
                className={activeNavLink("/patients")}
              >
                <UsersRound className="h-5 w-5"/>
                <span className="sr-only">Pacientes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Pacientes</TooltipContent>
          </Tooltip>
        </TooltipProvider>
       <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/financial"
                className={activeNavLink("/financial")}
              >
                <Receipt className="h-5 w-5"/>
                <span className="sr-only">Financeiro</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Financeiro</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>

      {/* User navigation */}
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/help"
                className={activeNavLink("/help")}
              >
                <CircleHelp className="h-5 w-5"/>
                <span className="sr-only">Ajuda</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Ajuda</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/settings"
                className={activeNavLink("/settings")}
              >
                <Settings className="h-5 w-5"/>
                <span className="sr-only">Configurações</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
      </nav>
    </aside>
  )
}
AppNav.displayName = "AppNav"

export default AppNav
