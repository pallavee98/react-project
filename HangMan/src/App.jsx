import Button from "./components/Button/Button"
import TextInput from "./components/TextInput/TextInput"
import TextInputForm from "./components/TextInputForm/TextInputForm"

function App() {

  return (
   <>
   <h1>WELCOME TO HANGMAN</h1><br></br>
  <TextInputForm onSubmit={(value)=> console.log("value config from the hidden form")}/>
   
   </>

  )
}

export default App
