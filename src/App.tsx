import { BrowserRouter } from 'react-router-dom'
import CardLink from './components/card/CardLink.card'

const App = () => (
  <BrowserRouter>
    <div className="flex h-screen w-screen flex-row gap-4 bg-gray-100 p-10">
      <CardLink to={'link'} />
      <CardLink to={'link'} />
      <CardLink to={'link'} />
    </div>
  </BrowserRouter>
)

export default App
