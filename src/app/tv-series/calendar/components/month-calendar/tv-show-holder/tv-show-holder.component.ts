import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ITvSeries } from '../../../../tvSeries';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tv-show-holder',
  templateUrl: './tv-show-holder.component.html',
  styleUrls: ['./tv-show-holder.component.scss']
})
export class TvShowHolderComponent implements OnInit {
  @Input() hour: string;
  @Input() title: string;
  @Input() description: string;
  isCollapsed: boolean;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
    this.isCollapsed = false;
  }

  ngOnInit() {
  }

}
