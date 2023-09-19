import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <h1 className="text-3xl text-white underline">
    Hello world!
      </h1>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
