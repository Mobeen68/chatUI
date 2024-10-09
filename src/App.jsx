import Sidebar from "./components/sideBar/SideBar";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Chat />
      <Contacts />
    </div>
  );
}

export default App;
