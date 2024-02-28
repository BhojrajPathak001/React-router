import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state==="loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>  
    </>
  );
}
