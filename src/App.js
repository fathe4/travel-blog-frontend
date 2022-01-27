
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Navigation from './pages/Shared/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import SingleBlog from './components/SingleBlog/SingleBlog';
import Login from './pages/LoginRegister/Login/Login';
import Register from './pages/LoginRegister/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/LoginRegister/PrivateRoute/PrivateRoute';
import AddBlog from './pages/Dashboard/AddBlog/AddBlog';
import AllBlogs from './pages/Dashboard/AllBlogs/AllBlogs';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import UpdateBlog from './pages/Dashboard/UpdateBlog/UpdateBlog';
import Approval from './pages/Dashboard/Approval/Approval';
import AdminRoute from './pages/LoginRegister/AdminRoute/AdminRoute';
import MyBlogs from './pages/Dashboard/MyBlogs/MyBLogs';
// import UseAuth from './hooks/UseAuth';



function App() {
  // const { user } = UseAuth()
  // console.log(user);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:id" element={<PrivateRoute><SingleBlog /></PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute ><Dashboard /></PrivateRoute>} >

              <Route path="addBlog" element={<PrivateRoute><AddBlog /></PrivateRoute>}></Route>
              <Route path="my-blog" element={<PrivateRoute><MyBlogs /></PrivateRoute>}></Route>
              <Route path="allBlogs" element={<AdminRoute><AllBlogs /></AdminRoute>}></Route>
              <Route path="make-admin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
              <Route path="update-blog/:id" element={<PrivateRoute><UpdateBlog /></PrivateRoute>}></Route>
              <Route path="approval" element={<AdminRoute><Approval /></AdminRoute>}></Route>

            </Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>


      </AuthProvider>
    </div>
  );
}

export default App;
