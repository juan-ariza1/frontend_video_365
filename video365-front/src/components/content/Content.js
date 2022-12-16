import { useEffect, useState } from "react";
import "./Content.css";
import { Card } from "react";



export const Content = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesAsync();
    }, []);

    const getMovies = () => {
        fetch("http://localhost:8080/api/movie")
        then((response) => response.json())
        then((response) => {
            setMovies(response);
        });
    };

    const getMoviesAsync = async () => {
        let response =await fetch("http://localhost:8080/api/movie");
        response = await response.json();
        setMovies(response);
    };

    return (
        <div className="row">
            {movies.map((movie, idx) => (
                <Card 
                    key={idx}
                    name={movie.name}
                    description={!movie.description?"No hay descripcion":movie.desciption}
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