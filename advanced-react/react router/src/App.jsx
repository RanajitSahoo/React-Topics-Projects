import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";

import Header from "./components/Header";

import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./context-store/post-list-store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
    <div className="app-container">
      <Header />

      <div className="app-content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          {selectedTab === "Home" ?<PostList/>:<CreatePost />}
          
          
          <Footer />
        </div>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
