import { Card } from './objects/Card';
import { Player } from './objects/Player';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Card />
      <Player player="x" />
    </>
  );
};

export default App;
