import { Component, OnInit } from '@angular/core';
import { TITLE } from 'src/app/shared/constant';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitleMoviePage(TITLE.ACTOR);
  }

}
