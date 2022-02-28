import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import {Home} from './pages'
import {Navbar} from './components'

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
