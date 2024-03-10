import React from "react";
import Image from "next/image"

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


const AppHeader = () => {
  return (
    <header className="flex justify-between sticky shadow-md px-xl py-lg">
      <div className="flex items-center"> {/* Navigation */}
          <a href="" className="mr-lg">
          <Image src="/assets/logo.svg" width="135" height="48" alt="Ease Genie" priority={true}/> 
          </a>

          {[
            ['Home', '#'],
            ['Agenda', '#'],
            ['Pacientes', '#'],
            ['Financeiro', '#'],
          ].map(([title, url]) => (
            <a href={url} className="body-lg px-md mx-sm hover:text-secondaryDark hover:no-underline hover:font-medium">{title}</a>
          ))}

      </div>
      <div className="flex items-center space-x-sm"> {/* User menu */}

        <Button variant="ghost" size="icon">
          <span className="material-symbols-rounded">help</span>
        </Button>
        <Button variant="ghost" size="icon">
          <span className="material-symbols-rounded">settings</span>
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
          <DropdownMenuContent className="w-56" align="end" forceMount>
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
              <DropdownMenuItem>
                Perfil
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Configurações
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
