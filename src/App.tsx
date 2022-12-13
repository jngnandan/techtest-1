import React, {useState} from 'react';
import Table, { TableStyle }  from './components/table/index'
import testData from './data.json';


function App() {

    const [tableStyle, setTableStyle] = useState<TableStyle>(TableStyle.StyleOne);

    return (
        <div className='App mb-14 body-font font-poppins'>
            <button  className='cursor-auto	user-select:none bg-skybluish hover:bg-gray-200 font-sm py-2 px-4 m-4 hover:text-gray-400 rounded-sm text-white font-medium' onClick={() => setTableStyle( tableStyle === TableStyle.StyleOne ? TableStyle.StyleTwo : TableStyle.StyleOne )}>Toggle Style</button>
            <div className='tableContainer'>
                <Table title="Seasoncard Holder" data={testData} style={tableStyle} />
            
            </div>            

        </div>
    );
}

export default App;