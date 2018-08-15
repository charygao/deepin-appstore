import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { truncate } from 'lodash';

import { App, AppService } from '../../services/app.service';
import { SortOrder } from '../app-title/app-title.component';
import { RecommendService } from '../../services/recommend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private recommendService: RecommendService,
  ) {}

  sortBy = SortOrder.Downloads;
  keyword$: Observable<string>;
  title$: Observable<string>;
  apps$: Observable<App[]>;

  ngOnInit() {
    this.title$ = this.route.queryParamMap.pipe(
      map(param => `"${truncate(param.get('keyword'), { length: 16 })}"`),
    );

    this.apps$ = this.route.queryParamMap.pipe(
      flatMap(param => {
        const appNameList = param.getAll('apps');
        return this.appService.getApps(appNameList);
      }),
    );
  }

  recommend() {
    this.recommendService.openRecommend();
  }
}
