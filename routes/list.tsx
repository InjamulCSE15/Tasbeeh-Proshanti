import { PageProps } from "$fresh/server.ts";
import Navbar from '../components/Navmenu.tsx'; 
import TasbeehList from "../islands/TasbeehList.tsx";

export default function List(props: PageProps) {  

  return (
    <>
      <Navbar activePath={props.url.pathname}/>
      <section class="relative p-4 sm:p-6 xl:p-10 bg-cover bg-center" style="background-image: url('./assets/images/ssbg.png'); min-height: 100vh;">
        <div class="absolute inset-0 bg-black/60 z-0"></div>
        <section class="p-4 sm:p-6 xl:p-10 xl:py-14">
        {/* Call the Island here */}
        <TasbeehList />
      </section>       
      </section>
    </>
  );
}