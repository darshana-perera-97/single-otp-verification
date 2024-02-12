import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Design from "./Design/Design";
import GetOTP from "./Design/GetOTP";
import Verify from "./Design/Verify";
import Loading from "./Design/Loading";
import Pages from "./Web/Pages";
import RoutingPage from "./Web/RoutingPage";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Design /> */}
      {/* <Loading />
      <GetOTP />
      <Verify /> */}
      {/* <Pages /> */}
      <RoutingPage />
    </div>
  );
}

export default App;
