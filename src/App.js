import header from "./components/header";

function App() {
  return (
    <div className="wrapper">
      <header />
      <div dangerouslySetInnerHTML={{ __html: require('../public/index.html') }} />
    </div>
  );
}

export default App;
