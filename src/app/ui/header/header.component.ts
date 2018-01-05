import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../core/ui.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isMobile = false;
  isMobileSubscription: Subscription;

  constructor(
    private uiService: UiService,
  ) {
    this.isMobileSubscription = this.uiService
      .mobileChange$
      .subscribe(isMobile => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.isMobileSubscription.unsubscribe();
  }

}
