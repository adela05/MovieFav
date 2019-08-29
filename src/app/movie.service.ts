import { Injectable } from '@angular/core';

export class Movie {
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
	movies: Movie[] = [ new Movie('Coco', 'Kids', '') ];
	constructor() {}

	// Return all movies
	getMovies(): Movie[] {
		return this.movies;
	}
	// Adds a new movie item to the Array list
	addMovie(title: string, descript: string, imgUrl: string) {
		const newMovie = new Movie(title, descript, imgUrl);
		this.movies.push(newMovie);
	}
	// Removes a movie from the Array list
	deleteMovie(i: number) {
		this.movies.splice(i, 1);
	}
}
