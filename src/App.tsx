import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RouterProvider } from "react-router-dom";
import { Theme } from "./theme";
import GlobalStyle from "./theme/global";
import { router } from "@routes/routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <DndProvider backend={HTML5Backend}>
          <Toaster
            position="bottom-right"
            richColors
            toastOptions={{
              style: {
                fontSize: "16px",
                padding: "16px"
              }
            }}
          />
          <RouterProvider router={router} />
          <GlobalStyle />
        </DndProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
