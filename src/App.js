import {
  HashRouter
} from 'react-router-dom'
import Layout from './Layout/Layout';

export default function App() {
  return (
    <HashRouter>
      <main>
        <Layout />
      </main>
    </HashRouter>
  );
};
