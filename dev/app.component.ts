import {Component} from 'angular2/core';
import {HelloWorldComponent} from "./hello-world.component";

@Component({
    selector: 'my-app',
    template: `
        <H1>Your of Heros!</H1>
        <hello-world></hello-world>
    `,
    directives: [HelloWorldComponent]
})
export class AppComponent {

}
