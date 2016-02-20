import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="containter">
            <div class="row">
                <div class="col-md-12">
                    <H1> Hey {{name}}! Welcome, to the Tour of Heros!</H1>
                    <hr/>
                </div>
             </div>
             <div class="col-md-4">
                    Menu here
             </div>
             <div class="col-md-4 ">
                content here.
             </div>
        </div>
    `
})
export class AppComponent {
    name: string = 'Rusil';
}
