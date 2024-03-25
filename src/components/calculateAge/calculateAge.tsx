"use client"

const calculateAge = (dateString: string) => {
   // Get today date
   const today = new Date();
 
   // Patient birthday
   const birthDate = new Date(dateString);
 
   // turn DD/MM/YYYY in MM/DD/YYYY (needed to calc dates)
   var dateParts = dateString.split("/");
   if (dateParts && dateParts.length >= 3) {
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
 
     // Calc age
     var age = today.getFullYear() - dateObject.getFullYear();
 
     // Get month
     var m = today.getMonth() - dateObject.getMonth();
 
     // Check if birthday occurred this year
     if (m < 0 || (m === 0 && today.getDate() < dateObject.getDate())) {
       age--;
     }
 
     return age;
   }
 
   return null; // or any other appropriate default value
 };
    

export default calculateAge;