import './App.css';
import Header from "./components/Header/Header";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegarm";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NavButtonContainer from "./components/NavButtonContainer/NavButtonContainer";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    const {tg} = useTelegram();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2000)
        return () => { clearTimeout(timer) }
    }, []);

    useEffect(() => {
        tg.ready();
    }, []);

    if (showIntro) {
        return (
            <div >
                <LoadingScreen/>
            </div>
        )
    }

    return (
      <TonConnectUIProvider manifestUrl={"https://9b85-109-229-137-196.ngrok-free.app"}>
          <div className="App">
              <Header/>

              <NavButtonContainer/>
          </div>
      </TonConnectUIProvider>
  );
}

export default App;
