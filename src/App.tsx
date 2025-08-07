
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Form from './Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Router>
  );
}

export default App;