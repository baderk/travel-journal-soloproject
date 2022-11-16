import Navbar from "./components/Navbar";
import DestinationCard from "./components/DestinationCard";
import data from './data';

function App() {

  const posts = data.map(item => {
    return <DestinationCard
      key={item.id}
      item={item}
    />
  })

  return (
    <div className="container">
      <Navbar />
      <section className="posts">
        {posts}
      </section>
    </div>
  );
}

export default App;
