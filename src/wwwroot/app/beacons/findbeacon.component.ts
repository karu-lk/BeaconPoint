import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
    selector: 'findbeacon',
    template: require('./findbeacon.component.html')
})
export class FindBeaconComponent implements OnInit {
    title: string = 'Find Beacon';
    body: string = 'Find the physical location of the beacon on Google Map';
    message: string;

    constructor(public _stateService: StateService) { }

    ngOnInit() {
        this.message = this._stateService.getMessage();
    }

    updateMessage(m: string): void {
        this._stateService.setMessage(m);
    }
}
