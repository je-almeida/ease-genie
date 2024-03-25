import Link from "next/link";
import SiteHeader from "~/components/ui/siteHeader";
import { PublicRoute } from "~/components/PublicRoute/PublicRoute";

const Homepage = async () => {
  return (

    <PublicRoute>

        <SiteHeader />

        <div className="container-full">
          <h1 className="head-lg mb-md">Home</h1>
        </div>
        
    </PublicRoute>
  );
};

export default Homepage;
