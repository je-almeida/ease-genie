import { useEffect } from 'react';
import { supabase } from "~/server/supabase/supabaseClient";
import { useRouter } from "next/navigation"; // Import your Supabase client instance
import { Button } from "~/components/ui/button";

const Logout = () => {
  const router = useRouter();

  const logoutUser = async () => {
    const { error } = await supabase().auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }

    router.push('/');
  };

  return (
    <Button variant="ghost" onClick={logoutUser} className="p-0 ">
      <span className="material-symbols-rounded">logout</span>
      Logout
    </Button>
  )
};

export default Logout;
