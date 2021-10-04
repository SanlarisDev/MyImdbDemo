import { Component, OnInit } from '@angular/core';
import { TITLE } from 'src/app/shared/constant';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitleMoviePage(TITLE.COMPANY);
  }

}
