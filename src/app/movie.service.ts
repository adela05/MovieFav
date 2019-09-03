import { Injectable } from '@angular/core';

export class Movie {
	// Setting my properties
	title: string;
	descript: string;
	imgUrl: string;

	constructor(title: string, descript: string, imgUrl: string) {
		this.title = title;
		this.descript = descript;
		this.imgUrl = imgUrl;
	}
}
@Injectable({
	providedIn: 'root'
})
export class MovieService {
	// Assign new movie items to an Array
	movies: Movie[] = [
		new Movie(
			'Coco',
			'Miguel, confronted with his familys ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
			'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg'
		),
		new Movie(
			'The Little Mermaid',
			'A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince love.',
			'https://images-na.ssl-images-amazon.com/images/I/91MruhMtBVL.jpg'
		),
		new Movie(
			'Underworld',
			'Underworld action horror film created by Len Wiseman, Kevin Grevioux, and Danny McBride. The first film, Underworld, was released in 2003.',
			'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Underworld2evolution.jpg/220px-Underworld2evolution.jpg'
		),
		new Movie(
			'Gladiator',
			'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
			'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
		)
	];

	constructor() {}

	// Adds a new movie item to the Array list
	addMovie(title: string, descript: string, imgUrl: string) {
		const newMovie = new Movie(title, descript, imgUrl);
		this.movies.push(newMovie);
	}
	// Removes a movie from the Array list
	deleteMovie(i: number) {
		this.movies.splice(i, 1);
	}
	// Return all movies
	getMovies(): Movie[] {
		return this.movies;
	}
}
