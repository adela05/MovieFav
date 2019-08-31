import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-movie',
	templateUrl: './add-movie.component.html',
	styleUrls: [ './add-movie.component.scss' ]
})
export class AddMovieComponent implements OnInit {
	movieForm = this.fb.group({
		title: [ '' ],
		descript: [ '' ],
		imgUrl: [ '' ]
	});
	valuesChangeSub: any;

	constructor(private fb: FormBuilder, private movieService: MovieService) {}

	ngOnInit() {
		// this.valuesChangeSub = this.movieForm.valueChanges.subscribe(
		// 	(res: any) => {
		// 		console.log(this.movieForm);
		// 	},
		// 	(err) => {
		// 		console.log(err);
		// 	}
		// );
	}
	onSubmit() {
		const title = this.movieForm.value.title;
		const descript = this.movieForm.value.descript;
		const imgUrl = this.movieForm.value.imgUrl;

		this.movieService.addMovie(title, descript, imgUrl);
		this.onResetForm();
	}
	// will only update the info
	onPatchText() {
		this.movieForm.patchValue({
			descript: 'Sample detail text'
		});
	}
	// will over-write everything
	onSetText() {
		this.movieForm.setValue({
			title: 'setValue sample title',
			descript: 'setValue sample text'
		});
	}
	onResetForm() {
		this.movieForm.reset();
	}
}
