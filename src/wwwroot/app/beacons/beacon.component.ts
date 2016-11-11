import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
    selector: 'beacon',
    template: require('./beacon.component.html')
})
export class BeaconComponent implements OnInit {
    title: string = 'BLE Beacons';
    body: string = 'This is the list of Bluetooth Low Energy (BLE) Beacons available';
    message: string;

    constructor(public _stateService: StateService) { }

    ngOnInit() {
        this.message = this._stateService.getMessage();
    }

    updateMessage(m: string): void {
        this._stateService.setMessage(m);
    }
}
