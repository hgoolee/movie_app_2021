import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// // function Food(props) {
// //   return (<h3>I like {props.favourite}!!</h3>);
// // }

// // function Food({favourite}) {
// //   return (<h1>I like {favourite}!!</h1>);
// // }

// const foodLike = [
//   {id: 1, name: "Kimchi", image: "", rating: 5.0},
//   {id: 2, name: "Samgyeopsal", image: "", rating: 4.9},
//   {id: 3, name: "Bibimbap", image: "", rating: 4.8},
//   {id: 4, name: "Donkatsu", image: "", rating: 4.5},
//   {id: 5, name: "Kimbap", image: "", rating: 4.7}
// ]

// // function renderFood(dish) {
// //   return <Food name={dish.name} image={dish.photo} />;
// // }

// function Food({ name, photo, rating }) {
//   return <div>
//     <h2>I like {name}!!</h2>
//     <h4>rating: {rating}/5.0</h4>
//     <img src={photo} alt={name} />
//   </div>;
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       <h1>Hello!!</h1>
//       {/* <Food favourite="Potato" /> */}
//       {foodLike.map(dish => <Food key={dish.id} name={dish.name} photo={dish.image} rating={dish.rating} />)}
//       {/* foodLike.map(renderFood) */}
//     </div>
//   );
// }

// export default App;




// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log("constructor()");
//   // }

//   state = {
//     count: 0
//   };

//   // componentDidMount() {
//   //   console.log("componentDidMount()");
//   // }

//   // componentDidUpdate() {
//   //   console.log("componentDidUpdate()");
//   // }

//   // componentWillUnmount() {
//   //   console.log("componentWillUnmount()");
//   // }

//   add = () => {
//     this.setState(current => ({ count: current.count+1 }));
//     console.log("Add");
//   };

//   subtract = () => {
//     this.setState(current => ({ count: current.count-  }));
//     console.log("Subtract");
//   };

//   render() {
//     // console.log("render()");
//     return <div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.subtract}>Subtract</button>
//     </div>;
//   }
// }

// export default App;




class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      {isLoading ?
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        :
        <div className="movies">
          {movies.map(movie => {
            return <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres} />;
          })}
        </div>
      }
    </section>;
  }
}

export default App;
