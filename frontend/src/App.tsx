import { useSelector } from "react-redux";
import LoginForm from "./components/login";
import { RootState } from "./redux/store";
import Dashboard from "./components/dashboard";

function App() {
  const username = useSelector((state: RootState) => state.auth.username);
  return <div>{username ? <Dashboard /> : <LoginForm />}</div>;
}

export default App;
