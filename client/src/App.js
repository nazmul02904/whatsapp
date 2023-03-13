import { RouterProvider } from "react-router-dom";
import ToggleBtn from "./components/ToggleIcon";
import Views from "./utils/routers";

const App = () => {
  return (
    <>
        <ToggleBtn />
        <Views />
    </>
  );
};
export default App;
