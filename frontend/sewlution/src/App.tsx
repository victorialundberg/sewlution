import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { AppBackground } from "./styles/AppBackground";

function App() {
    return (
        <AppBackground>
            <RouterProvider router={router}></RouterProvider>
        </AppBackground>
    );
}

export default App;
