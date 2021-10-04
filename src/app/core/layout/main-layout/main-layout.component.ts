import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TitleService } from 'src/app/shared/services/title.service';
import { URLS } from 'src/app/shared/urls';
import { FloatButton } from '../components/float-button/float-buttom.model';
import { FloatButtonService } from '../services/float-button.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewChecked{
  pageTitle: string = '';
  buttons$: Observable<FloatButton[]>;
  buttonBackShow: boolean;

  urls = URLS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public titleService: TitleService,
              public titleBrowser: Title,
              private cdref: ChangeDetectorRef,
              private floatButton: FloatButtonService,
              private location: Location) {
    this.buttons$ = this.floatButton.floatButtons$;
    this.buttonBackShow =  false;
  }

  ngOnInit(): void {

    // Title
    this.titleService.title$.subscribe((titleElement) => {
      this.buttonBackShow = titleElement.isBack;
      this.pageTitle = titleElement.title;

      this.titleBrowser.setTitle(titleElement.title);
    });
  }

  ngAfterViewChecked(): void{
    this.cdref.detectChanges();
  }

  onButtonPress(event:any){
    event();
    console.log(event);
  }

  onBack(){
    this.location.back();
  }
}
