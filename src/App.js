import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './pages/Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
