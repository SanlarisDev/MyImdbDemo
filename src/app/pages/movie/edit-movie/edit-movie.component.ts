import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from '../movie';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Actor } from '../../actor/actor';
import { ActorEntity } from '../../actor/actor.entity';
import { Observable } from 'rxjs';
import { CompanyEntity } from '../../company/company.entity';
import { TitleService } from 'src/app/shared/services/title.service';
import { TITLE } from 'src/app/shared/constant';

export enum modeEdit {EDIT="EDIT", NEW="NEW"}

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  public movie!: Movie;
  public loadingMovie: boolean = true;
  public urls = URLS;
  public modeEdit = modeEdit;
  public mode: modeEdit = modeEdit.EDIT;

  // Chips
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  // Chips Genre
  public genreSelectable: boolean = true;
  public genreRemovable: boolean = true;
  public genreAddOnBlur = true;

  // Chips Actor
  public actorSelectable: boolean = true;
  public actorRemovable: boolean = true;
  public actorAddOnBlur = true;

  public movieForm: FormGroup;

  public listActors$: Observable<ActorEntity[]>;
  public listCompanies$: Observable<CompanyEntity[]>;

  constructor(
    private parseService: ParseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private titleService: TitleService) {
      this.movieForm = this.formBuilder.group({floatLabel: new FormControl('auto')});

      this.listActors$ = this.parseService.actors$;
      this.listCompanies$ = this.parseService.companies$;
    }

  ngOnInit(): void {
    let actualId = this.route.snapshot.paramMap.get('id');
    this.titleService.setTitleMoviePage(TITLE.MOVIE_EDIT);

    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      poster: [''],
      genre: [''],
      actors: [''],
      company: [''],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      imdbRating: ['']
    })

    if(actualId){
      this.parseService.getMovieWithActorsAndCompanies(parseInt(actualId))
      .pipe(finalize(() => this.loadingMovie = false))
      .subscribe( (_movie: Movie) => {
        this.movie = _movie;
        console.log(_movie);

        this.movieForm.controls['title'].setValue(_movie.title);
        this.movieForm.controls['poster'].setValue(_movie.poster);
        this.movieForm.controls['genre'].setValue(_movie.genre);
        this.movieForm.controls['actors'].setValue(_movie.actors);
        this.movieForm.controls['company'].setValue(_movie.company);
        this.movieForm.controls['year'].setValue(_movie.year);
        this.movieForm.controls['duration'].setValue(_movie.duration);
        this.movieForm.controls['imdbRating'].setValue(_movie.imdbRating);
      });

    } else {
      this.movie = new Movie();
      this.titleService.setTitleMoviePage(TITLE.MOVIE_CREATE);
      this.loadingMovie = false;
    }
  }


  public removeGenre(genre: string){
    this.movie.genre ? this.movie.genre : this.movie['genre'] = [];

    const index = this.movie.genre.indexOf(genre);
    if (index >= 0) {
      this.movie.genre.splice(index, 1);
    }
  }


  public addGenre(event: any){
    this.movie.genre ? this.movie.genre : this.movie['genre'] = [];
    const value = (event.value || '').trim();

    if (value) {
      this.movie.genre.push(value);
    }

    event.chipInput!.clear();
  }

  public removeActor(actor: Actor){
    if(this.movie.actors){
      const index = this.movie.actors.indexOf(actor);
      if (index >= 0) {
        this.movie.actors.splice(index, 1);
      }
    }
  }

  public addActor(event: any){
    if(this.movie.actors){
      console.log("event.value actor: ", event.value.first_name);
      const value = event.value;

      if (value) {
        this.movie.actors.push(value);
      }

      event.chipInput!.clear();
    }
  }

  public selectedActor(event:any){
    console.log(event);
  }

  public onSubmit(){
    console.log(this.movieForm);
    console.log(this.movieForm.value);
  }

  public onCancel(){
    this.location.back();
  }

}
