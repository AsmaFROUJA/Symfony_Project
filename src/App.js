import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import QuestionsPage from './Pages/QuestionsPage';
import AskQuestion from './Pages/AskQuestion';
import HomePage from './Pages/homePage';
import QuestionDetailsPage from './Pages/QuestionDetailsPage';
// import { createRoot } from 'react-dom/client';


const AboutPage = () => <div>About</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <div className='container-fluid'>
            <Link className='navbar-brand'>
              <strong>StackOverFlow </strong>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/question' element={<QuestionsPage />} /> */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='/AskQuestion' element={<AskQuestion />} />
          {/* <Route path='/users/:id' element={<User />} /> */}
           <Route path='/questions/:id' element={<QuestionDetailsPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
