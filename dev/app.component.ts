import {Component} from 'angular2/core';
import {HelloWorldComponent} from "./hello-world.component";

@Component({
    selector: 'my-app',
    template: `
        <H1>My Angular 2 App</H1>
        <hello-world></hello-world>
    `,
    directives: [HelloWorldComponent]
})
export class AppComponent {

}
