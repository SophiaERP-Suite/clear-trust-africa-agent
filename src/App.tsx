import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <BrowserRouter basename="/xt/ct_agt">
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
