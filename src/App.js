import { ContextProvider } from './js/store/context';
import router from './js/routes/routes';
import { RouterProvider } from 'react-router-dom';
import "nes.css/css/nes.min.css"

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider> 
  );
}

export default App;
