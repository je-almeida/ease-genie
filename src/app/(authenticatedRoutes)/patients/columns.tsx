"use client"

import { ColumnDef } from "@tanstack/react-table"
import calculateAge from "~/components/calculateAge/calculateAge"
import { Badge } from "~/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "~/components/ui/tooltip"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Patients = {
    avatar: string
    name: string
    age: string
    cpf: string
    lastAppointment: string
    nextAppointment: string
    groups: string
    email: string
    phone: string
}

export const columns: ColumnDef<Patients>[] = [
    {
        accessorKey: "avatar",
        header: "",
    /**
     * Renders an Avatar component with the user's avatar image and initials.
     *
     * @param {object} cell - An object containing the row data.
     * @param {object} cell.row - The row data object.
     * @param {string} cell.row.getValue - A function that returns the value of the "avatar" field in the row data.
     * @param {string} cell.row.original.name - The name of the user.
     * @return {JSX.Element} - The rendered Avatar component.
     */
        cell: ({ row }) => {

            const imageURL: string = row.getValue("avatar")
            const name = row.original.name
            var lastName = name ? name.split(' ').pop() ?? "" : "";
            var acronym = name.charAt(0) + lastName.charAt(0)
            
            return  <Avatar key={"avatar"+row.index}>
                        <AvatarImage src={imageURL} />
                        <AvatarFallback>{acronym}</AvatarFallback>
                    </Avatar>
        },
    },
    {
        accessorKey: "name",
        header: () => <div className="min-w-[240px]">Nome</div>,
        /**
         * Renders a cell in the table with the capitalized name value from the given row.
         *
         * @param {object} row - The row object containing the data for the cell.
         * @return {JSX.Element} The JSX element representing the cell.
         */
        cell: ({ row }) => {
            const name:string = row.getValue("name")

            return  <div className="capitalize" key={"name"+row.index}>
                        {name}
                    </div>
        }
    },
    {
        accessorKey: "age",
        header: () => <div className="text-center">Idade</div>,
        cell: ({ row }) => {
            const birthday = row.getValue("age")
            const age = calculateAge(birthday)
            const ageString = ("0" + (age < 10 ? "0" + age : age)).slice(-2)

            return  <div className="text-center" key={"age"+row.index}>
                        {ageString}
                    </div>
        },
    },
    {
        accessorKey: "cpf",
        header: () => <div className="min-w-[112px]">CPF</div>,
    },
    {
        accessorKey: "lastAppointment",
        header: () => <div className="min-w-[128px] text-center">Última consulta</div>,
        cell: ({ row }) => {
            const date:string = row.getValue("lastAppointment")

            return  <div className="text-center" key={"lastAppointment"+row.index}>
                        {date}
                    </div>
        }
    },
    {
        accessorKey: "nextAppointment",
        header: () => <div className="min-w-[128px] text-center">Próxima consulta</div>,
        cell: ({ row }) => {
            const date:string = row.getValue("nextAppointment")

            return  <div className="text-center" key={"nextAppointment"+row.index}>
                        {date}
                    </div>
        }
    },
    {
        accessorKey: "groups",
        header: () => <div className="min-w-[220px]">Grupos</div>,
        cell: ({ row }) => {
            const groupsString:string = row.getValue("groups")
            const array = groupsString.split(',')
            
            return array.map((group) => (
                <Badge className="mr-xs mb-xs" key={group+row.index}>
                    {group} 
                </Badge>
            ));  
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
          const email = row.original.email
          const phone = row.original.phone

     
          return (
            <div className="action-buttons flex justify-center" key={"avatar"+row.index}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild variant="ghost" size="icon">
                                <Link href="#">
                                    <span className="material-symbols-rounded">outgoing_mail</span>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-center"> 
                            Enviar e-mail para<br/>
                            {email}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild variant="ghost" size="icon">
                                <Link href="#">
                                    <Image src="/assets/whatsapp-icon.svg" width="24" height="24" alt="falar no WhatsApp"/> 
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-center">
                            Enviar WhatsApp<br/>
                            {phone}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild variant="ghost" size="icon">
                                <Link href="#">
                                    <span className="material-symbols-rounded">clinical_notes</span>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Ficha do paciente
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
          )
        },
    }
   
]
