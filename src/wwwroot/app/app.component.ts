import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
import {BeaconComponent} from './beacons/beacon.component';
import {LocationComponent} from './locations/location.component';
import {FindBeaconComponent} from './beacons/findbeacon.component';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [StateService, ExperimentsService],
})
@Routes([
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/beacons', component: BeaconComponent },
    { path: '/locations', component: LocationComponent },
    { path: '/findbeacons', component: FindBeaconComponent },
    { path: '/about', component: AboutComponent },
    { path: '/experiments', component: ExperimentsComponent },
    { path: '/*', component: HomeComponent }
])
export class AppComponent { }
