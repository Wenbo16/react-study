// App.js
import React, { useEffect, useState } from 'react';
import RefChart from './RefChart';

const datas = [
    [10, 30, 40, 20],
		[10, 30, 40, 20],
		[10, 30, 40, 20],
]
var i = 0;

function App() {
    const [data, setData] = useState([]);
		const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(400);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
				setWidth(800)
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }

		const changeWidth = () => {
      setWidth(800)
    }

    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <RefChart width={width} height={height} data={data} />
						<button onClick={changeWidth}>Change Width</button>
						<div id="basic_chart" />
        </div>
    );
}

export default App;