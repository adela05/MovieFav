import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
	selector: 'app-add-movie',
	templateUrl: './add-movie.component.html',
	styleUrls: [ './add-movie.component.scss' ]
})
export class AddMovieComponent implements OnInit, OnDestroy {
	movieForm = this.fb.group({
		title: [ '' ],
		descript: [ '' ],
		imgUrl: [ '' ]
	});
	valuesChangeSub: any;

	constructor(private movieService: MovieService, private fb: FormBuilder) {}

	ngOnInit() {
		this.valuesChangeSub = this.movieForm.valueChanges.subscribe(
			(res: any) => {
				console.log(this.movieForm);
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}
	ngOnDestroy() {
		if (this.valuesChangeSub) {
			this.valuesChangeSub.unsubscribe();
		}
	}
	onSubmit() {
		const title = this.movieForm.value.title;
		const descript = this.movieForm.value.descript;
		const imgUrl = this.movieForm.value.imgUrl;

		this.movieService.addMovie(title, descript, imgUrl);
		this.onResetForm();
	}
	onResetForm() {
		this.movieForm.reset();
	}
}
