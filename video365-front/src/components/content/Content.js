import { useEffect, useState } from "react";
import "./Content.css";
import { Card } from "react";



export const Content = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesAsync();
    }, []);

    const getMovies = () => {
        fetch(API_URL + "movie")
            .then((response) => response.json())
            .then((response) => {
                console.log(`2`, 2);
            setMovies(response);
        });
    };

    const getMoviesAsync = async () => {
        let response = await fetch(API_URL + "movie");
        response = await response.json();
        setMovies(response);
    };

    return (
        <div className="row">
            {movies.map((movie, idx) => (
                <Card 
                    key={idx}
                    name={movie.name}
                    description={
                        !movie.description ? "No hay descripcion" : movie.desciption
                    }
                    staffList={movie.staffList}
                    image={
                        !movie.imageLink
                        ? "https://picsum.photos/seed/picsum/200/300"
                        : movie.imageLink
                    }
                    id={movie.id}
                    />
            ))}
        </div>
    );
};