import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
    selector: 'location',
    template: require('./location.component.html')
})
export class LocationComponent implements OnInit {
    title: string = 'Locations';
    body: string = 'This is the list of available static (fixed) and dynamic (movable) physical locations';
    message: string;

    constructor(public _stateService: StateService) { }

    ngOnInit() {
        this.message = this._stateService.getMessage();
    }

    updateMessage(m: string): void {
        this._stateService.setMessage(m);
    }
}
