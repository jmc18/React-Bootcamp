import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import {Layout} from './components'

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Layout />
  )
}

export default App;
