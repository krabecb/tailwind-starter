import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import RogueImage from './images/ray-reyes-ND_kgsnEIeY-unsplash.jpg'
import ElevenImage from './images/eva-andria-dHR6wZKanhY-unsplash.jpg'

function App() {
  const [data, setData] = useState([
    {
      title: "Rogue Blade",
      image: RogueImage,
      price: "50",
      description: "I don't know anything about bowling balls I just got this idea from a friend"
    },
    {
      title: "Eleven",
      image: ElevenImage,
      price: "90",
      description: "I don't even see the brand on this ball, let's just say the brand is Eleven."
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
