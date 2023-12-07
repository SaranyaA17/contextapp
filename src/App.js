import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Pages/Form/Form';
import Table from './Component/Pages/Table/Table';
import Header from './Component/Pages/Header/Header';
import Users from './Component/Users/Users';
import Posts from './Component/Posts/Posts';
import Comments from './Component/Pages/Comments/Comments';
import Todos from './Component/Pages/Todos/Todos';
import NewUsers from './Component/Pages/NewUsers/NewUsers';


function App() {
  return (
    <div >
        <Header/>

      <div className='app-form'>
        <Routes>
          <Route path='/' element={<Form/>}/>
          {/* <Route path='/form' element={<Form/>} /> */}
          <Route path='/table' element={<Table/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/comments' element={<Comments/>}/>
          <Route path='/todos' element={<Todos/>}/>
          <Route path='/newusers' element={<NewUsers/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
