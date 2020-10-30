import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import Welcome from './Welcome';


function App() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return checked ? <Welcome handleShowContent={handleChange} /> : <Portfolio />
}

ReactDOM.render(<App />, document.getElementById('root'));
