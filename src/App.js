import './App.css'

//
import Splashscreen from './splashscreen/Index'
import Router from './Router'
import AppCursor from './compx/ui/AppCursor'

function App() {
  return (
    <div className='App'>
      {/*  */}
      <Splashscreen />
      {/*  */}
      <AppCursor />
      {/*  */}
      <Router />
    </div>
  )
}

export default App
