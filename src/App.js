import "./App.css";
import MainChat from "./pages/mainChat";
import ConfigurationContextProvider from "./context/configurationContext";
import ColorModeContextProvider from "./context/colorModeContext";

function App() {
  return (
    <ConfigurationContextProvider>
      <ColorModeContextProvider>
        <div className="App">
          <MainChat />
        </div>
      </ColorModeContextProvider>
    </ConfigurationContextProvider>
  );
}

export default App;
