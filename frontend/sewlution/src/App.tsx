import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { AppBackground } from "./styles/styledComponents/AppBackground";
import { GlobalStyle } from "./styles/styledComponents/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <AppBackground>
                <RouterProvider router={router}></RouterProvider>
            </AppBackground>
        </>
    );
}

export default App;
