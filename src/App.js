import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Continous_Improment from './Continous_Improment';

const App = () => {
    return(
        <>
            <div className="App">
    
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/continuous-improvement" element={<Continous_Improment/>} />

                    </Routes>
            </div>
        </>
    )
}
export default App;