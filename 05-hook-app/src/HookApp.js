import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook"
import './HookApp.css'

const HookApp = () => {
  return (
    <div className="container">
        {/* <CounterApp/> */}
        {/* <CounterWithCustomHook/> */}
        <FormWithCustomHook/>
    </div>
  )
}

export default HookApp