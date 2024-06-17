import { RouterProvider } from "react-router-dom";
import router from "./route/route";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
