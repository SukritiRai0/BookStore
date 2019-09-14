import React from 'react';
import logo from './logo.svg';
import book1 from './calculus.jpg';
import user from './user_circle_1048392.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Purdue Student Bookstore</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <img src={user} class="profile" alt="..." width="50" height="50"></img>
        </div>
      </nav>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div class="card">
        <img src={book1} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Calculus: Early Transcendentals</h5>
          <p class="card-text">Edition:3rd<br></br>ISBN: 9780134996684<br></br>
          Author Briggs<br></br>Publisher: Pearson
          </p>
          <h5 class="card-title"><b>Price: $100</b></h5>
          <a href="#" class="btn btn-primary">Buy Now!</a>
        </div>
      </div>
    </div>
    
  );
}

export default App;
