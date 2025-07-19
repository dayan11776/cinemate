import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './route/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
