import { ChangeDetectorRef, Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public backdropVisible:boolean = false;
  constructor(
    private _events: EventService,
    public changeDetectorRef: ChangeDetectorRef
  
  ) {}

  async detailMisi(){
    this.toggleBackdrop(true);
    const data = {
    
      eventName: "openDetailMisi",
    }
    this._events.publish('detailMisi', data);
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }
}
