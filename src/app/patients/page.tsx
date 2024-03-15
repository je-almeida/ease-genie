import Link from "next/link";
import AppHeader from "~/components/AppHeader/AppHeader";

import * as React from "react"


import { Button } from "~/components/ui/button"


import { Patients, columns } from "./columns"
import { DataTable } from "~/components/ui/data-table"

async function getData(): Promise<Patients[]> {
  // Fetch data from your API here.
  return [
    {
      "avatar":"",
      "name": "Idadina aniversarina de Oliveira Alves Monteiro Santana",
      "age": "12/03/2000",
      "cpf": "371.294.655-6",
      "lastAppointment": "20/10/2013",
      "nextAppointment": "28/12/2024",
      "groups": "five, four, ten",
      "email": "cursus.luctus@aol.net",
      "phone": "(37) 4870-2874"
    },
    {
      "avatar":"",
      "name": "Cheyenne Ingram",
      "age": "30/05/1999",
      "cpf": "467.451.683-1",
      "lastAppointment": "08/02/2018",
      "nextAppointment": "15/11/2023",
      "groups": "nine, two, eight, six, ten, four, three, one, seven",
      "email": "erat.eget@outlook.edu",
      "phone": "(12) 0562-0454"
    },
    {
      "avatar":"",
      "name": "Aristotle Bartlett",
      "age": "02/03/2021",
      "cpf": "490.918.392-8",
      "lastAppointment": "06/12/2011",
      "nextAppointment": "07/01/2025",
      "groups": "four",
      "email": "sapien@protonmail.org",
      "phone": "(14) 2751-3795"
    },
    {
      "avatar":"",
      "name": "Macaulay Gibbs",
      "age": "17/03/2000",
      "cpf": "601.402.436-4",
      "lastAppointment": "25/03/2013",
      "nextAppointment": "12/10/2023",
      "groups": "eight, five, ten, two, four, nine, seven, one, three, six",
      "email": "iaculis.odio@hotmail.edu",
      "phone": "(52) 66271-9982"
    },
    {
      "avatar":"",
      "name": "August Avila",
      "age": "16/02/2010",
      "cpf": "699.452.422-1",
      "lastAppointment": "25/10/2009",
      "nextAppointment": "09/02/2025",
      "groups": "two, seven, nine, one, six, three, ten",
      "email": "risus.donec@outlook.edu",
      "phone": "(85) 17143-4075"
    },
    {
      "avatar":"",
      "name": "Duncan Schroeder",
      "age": "14/07/1985",
      "cpf": "786.756.484-2",
      "lastAppointment": "16/10/2019",
      "nextAppointment": "09/08/2024",
      "groups": "one, four, eight, seven, six, three",
      "email": "vel.est@icloud.ca",
      "phone": "(31) 4823-1282"
    },
    {
      "avatar":"",
      "name": "Cooper Griffin",
      "age": "27/04/1979",
      "cpf": "208.365.278-4",
      "lastAppointment": "12/11/2010",
      "nextAppointment": "20/08/2023",
      "groups": "one, seven, three, ten, six, eight, nine",
      "email": "aliquam.ultrices@hotmail.ca",
      "phone": "(01) 8271-4672"
    },
    {
      "avatar":"",
      "name": "Phelan Pennington",
      "age": "09/04/2012",
      "cpf": "456.228.614-5",
      "lastAppointment": "22/06/2022",
      "nextAppointment": "20/03/2023",
      "groups": "two, five, seven",
      "email": "vivamus.non.lorem@hotmail.edu",
      "phone": "(97) 8118-1416"
    },
    {
      "avatar":"",
      "name": "Kirsten Freeman",
      "age": "27/02/1988",
      "cpf": "156.320.789-6",
      "lastAppointment": "06/09/2016",
      "nextAppointment": "13/10/2024",
      "groups": "eight, six, two, five, one, three",
      "email": "sed.leo.cras@google.org",
      "phone": "(38) 8377-8451"
    },
    {
      "avatar":"",
      "name": "Dolan Blanchard",
      "age": "12/06/2021",
      "cpf": "225.568.807-8",
      "lastAppointment": "01/05/2015",
      "nextAppointment": "11/06/2024",
      "groups": "seven, eight, nine, four, five, one",
      "email": "et.commodo@protonmail.org",
      "phone": "(38) 8274-4346"
    },
    {
      "avatar":"",
      "name": "Hollee Wagner",
      "age": "20/03/1986",
      "cpf": "338.411.813-2",
      "lastAppointment": "29/11/2007",
      "nextAppointment": "21/05/2024",
      "groups": "four, six, five, three, eight, ten, seven, two, nine",
      "email": "dolor.dolor@outlook.net",
      "phone": "(31) 62866-4872"
    },
    {
      "avatar":"",
      "name": "Mari Higgins",
      "age": "15/07/2005",
      "cpf": "679.428.252-4",
      "lastAppointment": "09/02/2013",
      "nextAppointment": "13/07/2024",
      "groups": "five",
      "email": "erat.sed@outlook.couk",
      "phone": "(73) 12546-3614"
    },
    {
      "avatar":"",
      "name": "Malachi Charles",
      "age": "20/12/1989",
      "cpf": "475.413.428-5",
      "lastAppointment": "07/08/2020",
      "nextAppointment": "27/09/2023",
      "groups": "seven, one, two, ten",
      "email": "vitae.velit@google.edu",
      "phone": "(42) 2478-2408"
    },
    {
      "avatar":"",
      "name": "Ezra Austin",
      "age": "09/02/1973",
      "cpf": "422.687.272-1",
      "lastAppointment": "18/12/2017",
      "nextAppointment": "08/09/2023",
      "groups": "five, three, ten",
      "email": "malesuada.id@outlook.ca",
      "phone": "(07) 72292-7354"
    },
    {
      "avatar":"",
      "name": "Price Cohen",
      "age": "19/12/2008",
      "cpf": "631.697.917-5",
      "lastAppointment": "03/12/2020",
      "nextAppointment": "01/11/2024",
      "groups": "four, six, two, one, three, ten, eight, nine",
      "email": "non.enim.mauris@yahoo.org",
      "phone": "(78) 9728-4114"
    },
    {
      "avatar":"",
      "name": "Paki Osborn",
      "age": "14/08/1976",
      "cpf": "567.323.833-2",
      "lastAppointment": "13/01/2015",
      "nextAppointment": "20/04/2024",
      "groups": "five",
      "email": "bibendum.sed@yahoo.net",
      "phone": "(75) 56683-6371"
    },
    {
      "avatar":"",
      "name": "Alvin Riddle",
      "age": "08/09/2020",
      "cpf": "535.672.137-8",
      "lastAppointment": "17/02/2023",
      "nextAppointment": "30/07/2024",
      "groups": "three, four, six, eight, seven, ten, one, nine, five",
      "email": "lectus@yahoo.couk",
      "phone": "(58) 0441-9377"
    },
    {
      "avatar":"",
      "name": "Timothy Norris",
      "age": "17/02/2008",
      "cpf": "771.664.702-3",
      "lastAppointment": "25/07/2013",
      "nextAppointment": "24/10/2024",
      "groups": "six, three, seven, ten, eight, five, two, four",
      "email": "eros@yahoo.edu",
      "phone": "(77) 35566-0969"
    },
    {
      "avatar":"",
      "name": "Linus Mullen",
      "age": "25/10/1973",
      "cpf": "203.234.339-4",
      "lastAppointment": "09/01/2016",
      "nextAppointment": "25/02/2025",
      "groups": "three, five, two, seven, four, one, nine, ten",
      "email": "vitae.sodales@yahoo.ca",
      "phone": "(62) 65617-4494"
    },
    {
      "avatar":"",
      "name": "Merritt Slater",
      "age": "28/12/1970",
      "cpf": "031.248.135-3",
      "lastAppointment": "27/08/2011",
      "nextAppointment": "05/03/2024",
      "groups": "six, seven, nine, ten, four",
      "email": "venenatis@outlook.ca",
      "phone": "(41) 27682-7868"
    }
  ]
}


const patientsPage = async () => {

  // data object
  const data = await getData()
  
  return (
    <main>
      <AppHeader/>
      <div className="container-full">
        <h1 className="head-lg mb-xxl">Pacientes</h1>

        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default patientsPage;
