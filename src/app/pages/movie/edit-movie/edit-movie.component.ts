import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

export enum modeEdit {Edit, New}

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  public movie!: Movie | null;
  public loadingMovie: boolean = true;
  public urls = URLS;
  private mode: modeEdit = modeEdit.Edit;

  constructor(
    private parseService: ParseService,
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {


  }

}
