import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  isMobile : boolean = false;
  mediaSubs : Subscription;

  constructor(
    public media : ObservableMedia
  ){}

  ngOnInit(){
    this.mediaSubs = this.getMediaSubscription();
  }

  ngOnDestroy(){
    if(this.mediaSubs) this.mediaSubs.unsubscribe();
  }

  getMediaSubscription() : Subscription {
    return this.media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');
    });
  }

}
