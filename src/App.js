import './App.css';
import {BrowserRouter,Routes,Route,Link,useNavigate,Outlet,useLocation} from 'react-router-dom';
import User from './user';


function RouterComponent() {
  return (
    <>
    
    <BrowserRouter> 
      {/* Then we have  to link in the tag*/}
      <Link to='/'>Dashboard</Link> &nbsp;
      <Link to='/aboutus?fil=no&desc=adklskdod54s56'>AboutUs</Link> &nbsp;
      <Link to='/contactus'>ConatctUs</Link> &nbsp;
      <Link to='/user/5/course/8?sort=asc&filter=hightolow'>User</Link> &nbsp;       {/* passing dynamic params */}

       {/*Basic routic information  */}
      <Routes>
        <Route path='/' element={< Dashboard />}/>
        <Route path='/aboutus' element={<AboutUs />}>
          <Route path='' element ={<AboutusIndex />}/>
          <Route path='history' element ={<History />}/>
          <Route path='branches' element ={<Branches />}/>
        </Route>
        <Route path='/contactus' element={<ConatctUs />}/>
        <Route path='/user/:userid/course/:courseid' element={<User />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
    <h3>Dashboard Component</h3>
    <button onClick={()=>navigate('/aboutus',{
                                    state :{name:'Ram',age:'45'}
                                  }
                                  )
                    }>
                    About us
                    </button> &nbsp;
    <button onClick={()=>navigate(-1)}>Back</button>&nbsp;
    <button onClick={()=>navigate(1)}>Forward</button>
    </>
  );
}

function AboutUs() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
    <h3>AboutUs Component</h3>
    Name : {location.state.name}; <br/>
    <button onClick={()=>navigate(1)}>Forward</button>
    <button onClick={()=>navigate(-1)}>Back</button><br/>
    <Link to='/aboutus/history'> History</Link> &nbsp;
    <Link to='/aboutus/branches'> Branches</Link>
    <Outlet />
    </>
  );
}

function ConatctUs() {
  const navigate = useNavigate();

  return (
    <>
    <h3>ConatctUs Component</h3>
    <button onClick={()=>navigate(1)}>Forward</button>
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  );
}

function AboutusIndex(){
  return(
    <>
     <h3>Index</h3>
    History : 1992;
    Started at Trichy;
    </>
  );
}

function Branches(){
  return(
    <>
     <h3>Branch Component</h3>
    </>
  );
}

function History(){
  return(
    <>
     <h3>History Component</h3>
    </>
  );
}

export default RouterComponent;
