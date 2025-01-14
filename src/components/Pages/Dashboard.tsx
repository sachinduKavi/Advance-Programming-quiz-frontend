
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const navigate = useNavigate();

  // quizzes in database
  const quizzes = [
    { id: 1, title: 'Quiz 01', link: '/quiz/1' },
    { id: 2, title: 'Quiz 02', link: '/quiz/2' },
    { id: 3, title: 'Quiz 03', link: '/quiz/3' },
    
  ];

  return (
    <>
    <Navbar/>
    <div className="container py-5">
      
      <div className="mb-4 text-center " id="new_quiz">
        <button
          className="btn btn-dark fw-bold"
          onClick={() => navigate('/add-quiz')}
        >
          ADD NEW QUIZ
        </button>
      </div>

  
      <h4 className="mb-4">Recent Quizzes</h4>
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-md-4 mb-3">
            <div className="card text-center bg-secondary text-white">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <button
                  className="btn btn-dark mt-3 "
                  onClick={() => navigate(quiz.link)}
                >
                  Access Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
