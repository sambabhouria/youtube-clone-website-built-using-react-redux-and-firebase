import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HomeMainbar from './components/HomeMainbar/HomeMainbar';
import { BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import WatchVideos from './pages/WatchVideos/WatchVideos';
import Search from './pages/Search';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Channel from './pages/Channel/Channel';


const Layout = ({isNotConnect,  children }) => {
  if (isNotConnect) {
    console.log("🚀 ~ file: App.js ~ line 35 ~ Layout ~ isNotConnect", isNotConnect)
    return <Navigate to="/auth" replace />;
  }
  return (
    <>
       <div className="app">
          {/* Navbar */}
          <Navbar/>
          <div className='app_page'>
              {/* Sidebar */}
            <Sidebar/>
            {/* Video */}
             {children}
          </div>
       </div>
    </>
  );
};


const App = () => {

  const {accessToken, loading} = useSelector(state => state.auth)

  const isNotConnect = !loading && !accessToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route
            index
            element={
              <Layout isNotConnect={isNotConnect}>
                <HomeMainbar />
              </Layout>
            }
          />
          <Route path="/auth" element={<Login />} />
          <Route
            path='/search'
            element={
              <Layout isNotConnect={isNotConnect}>
                <Search />
              </Layout>
            }
          />

          <Route
            path='/search/:query'
            element={
              <Layout isNotConnect={isNotConnect}>
                <Search />
              </Layout>
            }
          />

          <Route
            path='/watch/:id'
            element={
              <Layout isNotConnect={isNotConnect}>
                <WatchVideos />
              </Layout>
            }
          />

          <Route
            path='/feed/subscriptions'
            element={
              <Layout isNotConnect={isNotConnect}>
                <Subscriptions />
              </Layout>
            }
          />
          <Route
            path='/channel/:channelId'
            element={
              <Layout isNotConnect={isNotConnect}>
                <Channel />
              </Layout>
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
