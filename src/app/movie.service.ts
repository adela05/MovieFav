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
			'Underworld',
			'Underworld action horror film created by Len Wiseman, Kevin Grevioux, and Danny McBride. The first film, Underworld, was released in 2003.',
			'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Underworld2evolution.jpg/220px-Underworld2evolution.jpg'
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
