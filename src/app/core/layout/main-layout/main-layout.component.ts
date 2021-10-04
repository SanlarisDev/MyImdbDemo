import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TitleService } from 'src/app/shared/services/title.service';
import { URLS } from 'src/app/shared/urls';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewChecked{
  pageTitle$: Observable<string>;

  urls = URLS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public titleService: TitleService,
              public titleBrowser: Title,
              private cdref: ChangeDetectorRef) {
    this.pageTitle$ = titleService.title$;
  }

  ngOnInit(): void {
    this.pageTitle$.subscribe((title) => {
      this.titleBrowser.setTitle(title);
    });
  }

  ngAfterViewChecked(): void{
    this.cdref.detectChanges();
  }

}
