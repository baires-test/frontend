import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mobileQuery: MediaQueryList;
  mobileChangeSub: Subscription;
  isMobile: boolean;

  private mobileQueryListener: (event: any) => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {}

  matchMobile() {
    this.mobileQuery = this.media.matchMedia('(max-width: 920px)');

    this.mobileQueryListener = (event) => {
      this.changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

}
