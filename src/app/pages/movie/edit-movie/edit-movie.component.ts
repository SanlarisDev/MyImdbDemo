import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from '../movie';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { finalize } from 'rxjs/operators';

export enum modeEdit {EDIT="EDIT", NEW="NEW"}

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  public movie!: Movie | {};
  public loadingMovie: boolean = true;
  public urls = URLS;
  public modeEdit = modeEdit;
  public mode: modeEdit = modeEdit.EDIT;
  public optionsForm: FormGroup;

  constructor(
    private parseService: ParseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
      this.optionsForm = this.formBuilder.group({floatLabel: new FormControl('auto')});
    }

  ngOnInit(): void {
    this.loadingMovie = false;
    let actualId = this.route.snapshot.paramMap.get('id');

    if(actualId){
      this.parseService.getMovieWithActorsAndCompanies(parseInt(actualId))
      .pipe(finalize(() => this.loadingMovie = false))
      .subscribe( (_movie: Movie) => {
        this.movie = _movie;
      });

    } else {
      this.movie = new Movie();
      this.loadingMovie = false;
    }
  }

}
