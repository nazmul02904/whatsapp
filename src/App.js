import { RouterProvider } from "react-router-dom";
import ToggleBtn from "./components/ToggleIcon";
import router from "./utils/routers";

const App = () => {
  return (
    <>
      <ToggleBtn />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
