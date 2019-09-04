import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
	movies: Movie[] = [];
	displayList: boolean = true;
	imgUrl: string = '';
	moviesBeingEdited = {};
	movieBeingDisplayed: Movie;

	constructor(private movieService: MovieService) {
		this.movieService = movieService;
	}

	ngOnInit() {
		this.getMovies();
		this.movieBeingDisplayed = this.movies[0];
	}
	onDeleteMovie(i: number) {
		this.movieService.deleteMovie(i);
		this.getMovies();
	}
	onStartEditMovie(i: number) {
		this.moviesBeingEdited[i] = true;
	}
	onSaveEditMovie(i: number) {
		this.moviesBeingEdited[i] = false;
	}
	onViewMovieDetails(movie: Movie) {
		this.movieBeingDisplayed = movie;
	}
	getMovies() {
		setTimeout(() => {
			this.movies = this.movieService.getMovies();
		}, 0);
	}
}
