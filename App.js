import LoginForm from "./components/LoginForm";
import qrOkut from "./components/qrOkut";
import servis from "./components/servis";
import Articles from "./components/Articles";
import ServisBilgileri from "./components/ServisBilgileri";
import besiktas from "./components/besiktas";
import uskudar from "./components/uskudar";
import bagcilar from "./components/bagcilar";
import fatih from "./components/fatih";
import eyup from "./components/eyup";
import beykoz from "./components/beykoz";
import bakirkoy from "./components/bakirkoy";
import florya from "./components/florya";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import Loading from "./components/Loading";


const SwitchNavigator=createSwitchNavigator(
  {
    LoginForm:LoginForm,
    qrOkut:qrOkut,
    servis:servis,
    Articles:Articles,
    Loading:Loading,
    ServisBilgileri:ServisBilgileri,
    besiktas:besiktas,
    uskudar:uskudar,
    bagcilar:bagcilar,
    fatih:fatih,
    eyup:eyup,
    beykoz:beykoz,
    bakirkoy:bakirkoy,
    florya:florya
  },
  {
    initialRouteName:'Loading',
    headerMode:'none'
  }
)
const App=createAppContainer(SwitchNavigator);
export default App