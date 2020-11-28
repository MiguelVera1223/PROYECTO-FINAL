import React from 'react'
import AppD from './AppD'
import AppM from './AppM'
import Header from  './components/a/Header'
const App = () => {
  return (
    <div>
      <Header />
    
      {/* formulario de articulo-Danny */}
      <main className="container">
        <AppD />


      {/*  Formulario de usuarios y lista 
          de usuarios-Miguel  */}
        <AppM />
      </main>


    </div>
  )
}

export default App

