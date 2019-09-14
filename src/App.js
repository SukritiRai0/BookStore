import React from 'react';
import logo from './logo.svg';
import book1 from './calculus.jpg';
import book2 from './econ.jpg';
import book3 from './buisness.jpg';
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
      <div class="dropdown">
        <p className="display-4">Find My Course Materials</p>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Department
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">MA</a>
          <a class="dropdown-item" href="#">CS</a>
          <a class="dropdown-item" href="#">Others</a>
        </div>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Course
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">18000</a>
          <a class="dropdown-item" href="#">16100</a>
          <a class="dropdown-item" href="#">Others</a>
        </div>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Section
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">All</a>
        </div>
        </div>
      <div class="row justify-content-center">
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
        <div class="card">
          <img src={book2} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Microeconomics</h5>
            <p class="card-text">Edition:3rd<br></br>ISBN: 9780130907868<br></br>
            Author Perkins<br></br>Publisher: Pearson
            </p>
            <h5 class="card-title"><b>Price: $100</b></h5>
            <a href="#" class="btn btn-primary">Buy Now!</a>
          </div>
        </div>
        <div class="card">
          <img src={book3} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Construction Business Management </h5>
            <p class="card-text">Edition:3rd<br></br>ISBN: 9780130907868<br></br>
            Author Schaufelberger<br></br>Publisher: Pearson
            </p>
            <h5 class="card-title"><b>Price: $100</b></h5>
            <a href="#" class="btn btn-primary">Buy Now!</a>
          </div>
        </div>
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
    </div>
    
  );
}

export default App;
