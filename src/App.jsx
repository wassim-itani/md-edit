import { EditorProvider } from "./contexts/EditorProvider";
import { PreviewProvider } from "./contexts/PreviewProvider";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import "./App.css";

export const App = () => {
  return (
    <EditorProvider>
      <PreviewProvider>
        <Header />
        <Main />
      </PreviewProvider>
    </EditorProvider>
  );
};
