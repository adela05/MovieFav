import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from 'src/app/movie.service';

@Component({
	selector: 'app-list-master',
	templateUrl: './list-master.component.html',
	styleUrls: [ './list-master.component.scss' ]
})
export class ListMasterComponent implements OnInit {
	movies: Movie[] = [];
	displayList: boolean = true;
	movieBeingEdited = {};
	movieBeingDisplayed: Movie;
	constructor(private movieService: MovieService) {}

	ngOnInit() {
		this.getMovies();
	}
	onToggleDisplay() {
		this.displayList = !this.displayList;
	}
	onDeleteMovie(i: number) {
		this.movieService.deleteMovie(i);
		this.getMovies();
	}
	getMovies() {
		setTimeout(() => {
			this.movies = this.movieService.getMovies();
		}, 0);
	}
}
