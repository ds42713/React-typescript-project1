export declare module movieInterface {

    export interface Producer {
        producerName: string;
    }

    export interface MovieGenre {
        GenreId: number;
        MovieId: number;
    }

    export interface Genre {
        genreName: string;
        Movie_genre: MovieGenre;
    }

    export interface MovieStreaming {
        MovieId: number;
        StreamingId: number;
    }

    export interface Streaming {
        streamingName: string;
        streamingImg: string;
        Movie_streaming: MovieStreaming;
    }

    export interface MovieActor {
        ActorId: number;
        MovieId: number;
    }

    export interface Actor {
        actorName: string;
        Movie_actor: MovieActor;
    }

    export interface Comment {
        title: string;
        createdAt: Date;
    }

    export interface List {
        UserId: number;
    }

    export interface Movie {
        id: number;
        movieName: string;
        details: string;
        rating: number;
        movieImg: string;
        movieImgPoster: string;
        type: string;
        season: number;
        createdAt: Date;
        updatedAt: Date;
        ProducerId: number;
        Producer: Producer;
        Genres: Genre[];
        Streamings: Streaming[];
        Actors: Actor[];
        Comments: Comment[];
        Lists: List[];
    }

    export interface RootObject {
        movie: Movie[];
    }

}

