import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router ={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
