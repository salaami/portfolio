import {
  BrowserRouter
} from 'react-router-dom'
import Layout from './Layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Layout />
      </main>
    </BrowserRouter>
  );
};
