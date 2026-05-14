import Header from './components/common/Header'
import './App.css'

function App() {
  return (
    <div id="root-background">
      <div id="root-container">
        <Header />
        <div className="p-10 flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold underline">Coucou Milan !</h1>
          <p>Mon portfolio est en cours de construction</p>
          <a href="https://github.com/alcapitan/portfolio" target="_blank" className="btn btn-accent text-white">Voir le repo GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default App
