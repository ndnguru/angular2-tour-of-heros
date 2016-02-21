import {Component} from 'angular2/core';
interface Hero {
    id:number,
    name:string
}


@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="navbar-brand">Angular2 - Tutorial</div>
        </nav>
        <div class="containter">

            <div class="row">
                <div class="col-md-12">
                     <h1 class="col-xs-12 text-center">Welcome to the Tour of Heros!</h1>

                </div>
             </div>
             <hr />
             <div class="col-sm-4">
                    <div class="col-xs-12 lead">Hero List</div>
                    <div class="col-xs-12">
                        <input type="text" class="form-control" placeholder="add a hero!" #newHero (keyup.enter)="addHero(newHero.value)">
                    <hr/>
                    </div>

                    <div class="col-xs-12">
                    <ul class="heroList">
                        <li *ngFor="#hero of heroList">
                          <span class="badge">{{hero.id}}</span> {{hero.name}}
                        </li>
                    </ul>
                    </div>

             </div>
             <div class="col-sm-8 ">
                content here.
             </div>
        </div>
    `,
    directives:[]
})
export class AppComponent {

    name: string = 'Rusil';
    heroId: number = 1201;//parseInt(Math.random()*1000);

    constructor() {
        console.log("App Component Constructor");
    }

    //public hero: Hero = {
    //    id:this.heroId++,
    //    name:'Rusilator'
    //};
    public heroList:Array<Hero> = [
        {
            id:this.heroId++,
            name:'Rusilator'
        },


    ];


    addHero(name:string) {
        if (name.length === 0)
        {
            console.log('No Input');
            return;
        }
        console.log("Add the Hero: ", name);

        var hero: Hero = {
            id:this.heroId++,
            name: name
        }
        this.heroList.push(hero);
    }


}


