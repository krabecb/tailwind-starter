import './App.css';
import { useState } from 'react'
import Header from '../Header/Header'
import Card from '../Card/Card'
import RogueImage from '../../images/ray-reyes-ND_kgsnEIeY-unsplash.jpg'
import ElevenImage from '../../images/eva-andria-dHR6wZKanhY-unsplash.jpg'

function App() {
  const [data, setData] = useState([
    {
      title: "Rogue Blade",
      image: RogueImage,
      price: "250",
      description: "Trusted over the years by professional bowlers. All the serious bowlers prefer Rogue."
    },
    {
      title: "Eleven",
      image: ElevenImage,
      price: "180",
      description: "Simple yet effective. A sleeper that will keep you in the lead."
    }
  ])
  
  const cards = data.map((eachData, idx) => <Card key={idx} data={eachData} />)
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
