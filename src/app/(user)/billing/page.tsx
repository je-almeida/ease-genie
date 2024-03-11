import Link from "next/link";
import AppHeader from "~/components/AppHeader/AppHeader";

const Homepage = async () => {
  return (
    <main>
      <AppHeader/>
      <div className="container">
        <h1 className="head-lg">Meu plano</h1>
      </div>
    </main>
  );
};

export default Homepage;
