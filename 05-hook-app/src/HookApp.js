import CounterApp from "./components/01-useState/CounterApp"
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook"
import { SimpleForm } from "./components/02-useEffect/SimpleForm"
import './HookApp.css'

const HookApp = () => {
  return (
    <div className="container">
        {/* <CounterApp/> */}
        {/* <CounterWithCustomHook/> */}
        <SimpleForm/>
    </div>
  )
}

export default HookApp