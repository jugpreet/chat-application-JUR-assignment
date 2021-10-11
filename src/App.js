
import './App.css';
import UserList from "./pages/UsersList/Userslist"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from "./Config/routes";
import ActiveUser from './pages/ActiveUser/ActiveUser';
import StartConversation from './pages/StartConversation/StartConversation';
import ChatRoom from './pages/chatRoom/ChatRoom';
import SelectUsersForConv from './pages/SelectUsersForConv/SelectUsersForConv';
function App() {
  //const API_WS_ROOT = process.env.REACT_APP_WS_URL
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ routes.active.path } >
            <ActiveUser />
          </Route>
          <Route path={routes.startConversation.path}>
            <StartConversation />
          </Route>
          <Route path={routes.chatRoom.path}>
            <ChatRoom />
          </Route>
          <Route path={routes.startNewConv.path}>
            <SelectUsersForConv />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
