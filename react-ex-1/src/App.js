import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <h3>Sahib Narang</h3>
   
     {data.information.map((information) =>
      <div>
      <p>{information.name}</p>
      <p>{information.age}</p>
      <p>{information.migYear}</p>
     
     
     
     </div>
      )}
    
    </div>
  );
}

export default App;
