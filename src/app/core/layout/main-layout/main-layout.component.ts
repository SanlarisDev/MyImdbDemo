import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TitleService } from 'src/app/shared/services/title.service';
import { URLS } from 'src/app/shared/urls';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{
  pageTitle: string = 'My IMDB';

  urls = URLS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.getTitle().subscribe(title => {
      this.pageTitle = title;
      console.log('title: ',this.pageTitle);
    });
  }

}
