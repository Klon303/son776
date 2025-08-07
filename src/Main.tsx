import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div    style={{display: 'flex',justifyContent: 'center', alignItems: 'center',gap: '20px'}}>
      <h1>Главная страница</h1>
      <Link to="/form">
        <button  style={{ fontSize: '24px',      backgroundColor: 'red',}}>Form</button>
      </Link>
    </div>
  );
};

export default Main;