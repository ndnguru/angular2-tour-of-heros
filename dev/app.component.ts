import {Component} from 'angular2/core';
interface Hero {
    id:number,
    name:string,
    strength: number,
    superPower:string
}


@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="navbar-brand">Angular2 - Tutorial</div>
        </nav>
        <div class="container">

            <div class="row">
                <div class="col-xs-12">
                     <h1 class="col-xs-12 text-center">Welcome to the Tour of Heros!</h1>

                </div>
             </div>

             <div class="row">


                 <div class="col-sm-4">
                        <div class="col-xs-12 lead">Hero List
                           <hr>
                        </div>
                        <div class="col-xs-12">
                        <form action="">
                            <input type="text" required class="form-control" placeholder="add a hero!" #newHeroName (keyup)="0">
                            <input type="text" required class="form-control" placeholder="Strength 0-100" #newHeroStrength (keyup)="0">
                            <input type="text" required class="form-control" placeholder="super powers!" #newHeroPowers (keyup.enter)="addHero(newHeroName, newHeroStrength, newHeroPowers)">
                        </form>
                        <hr/>
                        </div>

                        <div class="col-xs-12">
                            <ul class="heroList list-group">
                                  <a *ngFor="#hero of heroList; #i = index" class="list-group-item" href="#" (click)="loadHeroDetails(hero.id, i)" data-id={{hero.id}}>
                                    <div class="row">
                                        <div class="col-xs-8">{{hero.name}}</div>
                                        <div class="col-xs-4 text-right">
                                            <a href="#" (click)="removeButtonClicked(i)"><span class="glyphicon glyphicon-remove"> </span></a>

                                         </div>
                                    </div>
                                  </a>

                            </ul>
                        </div>

                 </div>
                 <div class="col-sm-8" *ngIf="heroDetails">
                    Hero Details:
                    <hr>
                    <h2>{{heroDetails.name}} ({{heroDetails.id}})</h2>
                    <br/>
                    <div class="col-sm-12">
                        <div class="col-sm-6">Strength Level:</div>
                        <div class="col-sm-6">
                            <div class="progress">
                              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="heroDetails.strength" aria-valuemin="0" aria-valuemax="100" [ngStyle]="{width: heroDetails.strength + '%'}">
                                <div *ngIf="heroDetails.strength >0">{{heroDetails.strength}}</div>
                              </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="col-sm-6">
                            Powers:
                        </div>
                        <div class="col-sm-6">
                            {{heroDetails.superPower}}
                        </div>
                    </div>
                </div>
             </div>
        </div>
    `,
    directives:[]
})
export class AppComponent {

    name: string = 'Rusil';
    heroId: number = 1202;//parseInt(Math.random()*1000);
    showHeroDetailsfForIndex: number = -1;
    heroDetails: Hero;
    constructor() {
        console.log("App Component Constructor");
    }


    public heroList:Array<Hero> = [
        {
            id:this.heroId++,
            name:'Rusilator',
            strength: 95,
            superPower: "Super Speed Reading!"
        },
        {
            id:this.heroId++,
            name:'Stevie Wonderful!',
            strength: 85,
            superPower: "X Ray Vision!"
        },
        {
            id:this.heroId++,
            name:'SuperMan',
            strength: 95,
            superPower: "Duh, Flying!"
        },


    ];


    addHero(name:any, strength:any, powers:any) {
        if (name.length === 0)
        {
            console.log('No Input');
            return;
        }
        console.log("Add the Hero: ", name);
        var heroName = name.value;
        var heroStrength = strength.value;
        var heroPowers = powers.value;
        var hero: Hero = {
            id:this.heroId++,
            name: heroName,
            strength: Number(heroStrength),
            superPower:heroPowers
        }
        this.heroList.push(hero);
        name.value = '';
        strength.value = '';
        powers.value = '';
    }

    loadHeroDetails(id:number, index:number) {
        console.log('hero: ', id);
        console.log('hero index: ', index);
        this.showHeroDetailsfForIndex = index;
        this.heroDetails = this.heroList[index];
    }


    removeButtonClicked(index:number) {
        console.log(index);
        this.heroList.splice(index, 1);
    }


}


