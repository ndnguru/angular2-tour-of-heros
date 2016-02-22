System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Rusil';
                    this.heroId = 1202; //parseInt(Math.random()*1000);
                    this.showHeroDetailsfForIndex = -1;
                    this.heroList = [
                        {
                            id: this.heroId++,
                            name: 'Rusilator',
                            strength: 95,
                            superPower: "Super Speed Reading!"
                        },
                        {
                            id: this.heroId++,
                            name: 'Stevie Wonderful!',
                            strength: 85,
                            superPower: "X Ray Vision!"
                        },
                        {
                            id: this.heroId++,
                            name: 'SuperMan',
                            strength: 95,
                            superPower: "Duh, Flying!"
                        },
                    ];
                    console.log("App Component Constructor");
                }
                AppComponent.prototype.addHero = function (name, strength, powers) {
                    if (name.length === 0) {
                        console.log('No Input');
                        return;
                    }
                    console.log("Add the Hero: ", name);
                    var heroName = name.value;
                    var heroStrength = strength.value;
                    var heroPowers = powers.value;
                    var hero = {
                        id: this.heroId++,
                        name: heroName,
                        strength: Number(heroStrength),
                        superPower: heroPowers
                    };
                    this.heroList.push(hero);
                    name.value = '';
                    strength.value = '';
                    powers.value = '';
                };
                AppComponent.prototype.loadHeroDetails = function (id, index) {
                    console.log('hero: ', id);
                    console.log('hero index: ', index);
                    this.showHeroDetailsfForIndex = index;
                    this.heroDetails = this.heroList[index];
                };
                AppComponent.prototype.removeButtonClicked = function (index) {
                    console.log(index);
                    this.heroList.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav class=\"navbar navbar-default navbar-fixed-top\">\n            <div class=\"navbar-brand\">Angular2 - Tutorial</div>\n        </nav>\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                     <h1 class=\"col-xs-12 text-center\">Welcome to the Tour of Heros!</h1>\n\n                </div>\n             </div>\n\n             <div class=\"row\">\n\n\n                 <div class=\"col-sm-4\">\n                        <div class=\"col-xs-12 lead\">Hero List\n                           <hr>\n                        </div>\n                        <div class=\"col-xs-12\">\n                        <form action=\"\">\n                            <input type=\"text\" required class=\"form-control\" placeholder=\"add a hero!\" #newHeroName (keyup)=\"0\">\n                            <input type=\"text\" required class=\"form-control\" placeholder=\"Strength 0-100\" #newHeroStrength (keyup)=\"0\">\n                            <input type=\"text\" required class=\"form-control\" placeholder=\"super powers!\" #newHeroPowers (keyup.enter)=\"addHero(newHeroName, newHeroStrength, newHeroPowers)\">\n                        </form>\n                        <hr/>\n                        </div>\n\n                        <div class=\"col-xs-12\">\n                            <ul class=\"heroList list-group\">\n                                  <a *ngFor=\"#hero of heroList; #i = index\" class=\"list-group-item\" href=\"#\" (click)=\"loadHeroDetails(hero.id, i)\" data-id={{hero.id}}>\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-8\">{{hero.name}}</div>\n                                        <div class=\"col-xs-4 text-right\">\n                                            <a href=\"#\" (click)=\"removeButtonClicked(i)\"><span class=\"glyphicon glyphicon-remove\"> </span></a>\n\n                                         </div>\n                                    </div>\n                                  </a>\n\n                            </ul>\n                        </div>\n\n                 </div>\n                 <div class=\"col-sm-8\" *ngIf=\"heroDetails\">\n                    Hero Details:\n                    <hr>\n                    <h2>{{heroDetails.name}} ({{heroDetails.id}})</h2>\n                    <br/>\n                    <div class=\"col-sm-12\">\n                        <div class=\"col-sm-6\">Strength Level:</div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"progress\">\n                              <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"heroDetails.strength\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width: heroDetails.strength + '%'}\">\n                                <div *ngIf=\"heroDetails.strength >0\">{{heroDetails.strength}}</div>\n                              </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"col-sm-6\">\n                            Powers:\n                        </div>\n                        <div class=\"col-sm-6\">\n                            {{heroDetails.superPower}}\n                        </div>\n                    </div>\n                </div>\n             </div>\n        </div>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmFkZEhlcm8iLCJBcHBDb21wb25lbnQubG9hZEhlcm9EZXRhaWxzIiwiQXBwQ29tcG9uZW50LnJlbW92ZUJ1dHRvbkNsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQW1GSUE7b0JBSkFDLFNBQUlBLEdBQVdBLE9BQU9BLENBQUNBO29CQUN2QkEsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsK0JBQStCQTtvQkFDckRBLDZCQUF3QkEsR0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBTy9CQSxhQUFRQSxHQUFlQTt3QkFDMUJBOzRCQUNJQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQTs0QkFDaEJBLElBQUlBLEVBQUNBLFdBQVdBOzRCQUNoQkEsUUFBUUEsRUFBRUEsRUFBRUE7NEJBQ1pBLFVBQVVBLEVBQUVBLHNCQUFzQkE7eUJBQ3JDQTt3QkFDREE7NEJBQ0lBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBOzRCQUNoQkEsSUFBSUEsRUFBQ0EsbUJBQW1CQTs0QkFDeEJBLFFBQVFBLEVBQUVBLEVBQUVBOzRCQUNaQSxVQUFVQSxFQUFFQSxlQUFlQTt5QkFDOUJBO3dCQUNEQTs0QkFDSUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUE7NEJBQ2hCQSxJQUFJQSxFQUFDQSxVQUFVQTs0QkFDZkEsUUFBUUEsRUFBRUEsRUFBRUE7NEJBQ1pBLFVBQVVBLEVBQUVBLGNBQWNBO3lCQUM3QkE7cUJBR0pBLENBQUNBO29CQXpCRUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBO2dCQTJCREQsOEJBQU9BLEdBQVBBLFVBQVFBLElBQVFBLEVBQUVBLFFBQVlBLEVBQUVBLE1BQVVBO29CQUN0Q0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FDdEJBLENBQUNBO3dCQUNHQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTt3QkFDeEJBLE1BQU1BLENBQUNBO29CQUNYQSxDQUFDQTtvQkFDREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcENBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO29CQUMxQkEsSUFBSUEsWUFBWUEsR0FBR0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2xDQSxJQUFJQSxVQUFVQSxHQUFHQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDOUJBLElBQUlBLElBQUlBLEdBQVNBO3dCQUNiQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQTt3QkFDaEJBLElBQUlBLEVBQUVBLFFBQVFBO3dCQUNkQSxRQUFRQSxFQUFFQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQTt3QkFDOUJBLFVBQVVBLEVBQUNBLFVBQVVBO3FCQUN4QkEsQ0FBQUE7b0JBQ0RBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQ2hCQSxRQUFRQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDcEJBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRURGLHNDQUFlQSxHQUFmQSxVQUFnQkEsRUFBU0EsRUFBRUEsS0FBWUE7b0JBQ25DRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQ0EsSUFBSUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdENBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM1Q0EsQ0FBQ0E7Z0JBR0RILDBDQUFtQkEsR0FBbkJBLFVBQW9CQSxLQUFZQTtvQkFDNUJJLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFqSkxKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsNDZHQXdFVEE7d0JBQ0RBLFVBQVVBLEVBQUNBLEVBQUVBO3FCQUNoQkEsQ0FBQ0E7O2lDQXdFREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXBKQSxBQW9KQ0EsSUFBQTtZQXBKRCx1Q0FvSkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW50ZXJmYWNlIEhlcm8ge1xuICAgIGlkOm51bWJlcixcbiAgICBuYW1lOnN0cmluZyxcbiAgICBzdHJlbmd0aDogbnVtYmVyLFxuICAgIHN1cGVyUG93ZXI6c3RyaW5nXG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZFwiPkFuZ3VsYXIyIC0gVHV0b3JpYWw8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gdGhlIFRvdXIgb2YgSGVyb3MhPC9oMT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGxlYWRcIj5IZXJvIExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cImFkZCBhIGhlcm8hXCIgI25ld0hlcm9OYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlN0cmVuZ3RoIDAtMTAwXCIgI25ld0hlcm9TdHJlbmd0aCAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJzdXBlciBwb3dlcnMhXCIgI25ld0hlcm9Qb3dlcnMgKGtleXVwLmVudGVyKT1cImFkZEhlcm8obmV3SGVyb05hbWUsIG5ld0hlcm9TdHJlbmd0aCwgbmV3SGVyb1Bvd2VycylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhlcm9MaXN0IGxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCIjaGVybyBvZiBoZXJvTGlzdDsgI2kgPSBpbmRleFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwibG9hZEhlcm9EZXRhaWxzKGhlcm8uaWQsIGkpXCIgZGF0YS1pZD17e2hlcm8uaWR9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLThcIj57e2hlcm8ubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwicmVtb3ZlQnV0dG9uQ2xpY2tlZChpKVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj4gPC9zcGFuPjwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCIgKm5nSWY9XCJoZXJvRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICBIZXJvIERldGFpbHM6XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7aGVyb0RldGFpbHMubmFtZX19ICh7e2hlcm9EZXRhaWxzLmlkfX0pPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+U3RyZW5ndGggTGV2ZWw6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiaGVyb0RldGFpbHMuc3RyZW5ndGhcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIiBbbmdTdHlsZV09XCJ7d2lkdGg6IGhlcm9EZXRhaWxzLnN0cmVuZ3RoICsgJyUnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaGVyb0RldGFpbHMuc3RyZW5ndGggPjBcIj57e2hlcm9EZXRhaWxzLnN0cmVuZ3RofX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvd2VyczpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3toZXJvRGV0YWlscy5zdXBlclBvd2VyfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBuYW1lOiBzdHJpbmcgPSAnUnVzaWwnO1xuICAgIGhlcm9JZDogbnVtYmVyID0gMTIwMjsvL3BhcnNlSW50KE1hdGgucmFuZG9tKCkqMTAwMCk7XG4gICAgc2hvd0hlcm9EZXRhaWxzZkZvckluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBoZXJvRGV0YWlsczogSGVybztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBcHAgQ29tcG9uZW50IENvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGhlcm9MaXN0OkFycmF5PEhlcm8+ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDp0aGlzLmhlcm9JZCsrLFxuICAgICAgICAgICAgbmFtZTonUnVzaWxhdG9yJyxcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA5NSxcbiAgICAgICAgICAgIHN1cGVyUG93ZXI6IFwiU3VwZXIgU3BlZWQgUmVhZGluZyFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDp0aGlzLmhlcm9JZCsrLFxuICAgICAgICAgICAgbmFtZTonU3RldmllIFdvbmRlcmZ1bCEnLFxuICAgICAgICAgICAgc3RyZW5ndGg6IDg1LFxuICAgICAgICAgICAgc3VwZXJQb3dlcjogXCJYIFJheSBWaXNpb24hXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6dGhpcy5oZXJvSWQrKyxcbiAgICAgICAgICAgIG5hbWU6J1N1cGVyTWFuJyxcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA5NSxcbiAgICAgICAgICAgIHN1cGVyUG93ZXI6IFwiRHVoLCBGbHlpbmchXCJcbiAgICAgICAgfSxcblxuXG4gICAgXTtcblxuXG4gICAgYWRkSGVybyhuYW1lOmFueSwgc3RyZW5ndGg6YW55LCBwb3dlcnM6YW55KSB7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIElucHV0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJBZGQgdGhlIEhlcm86IFwiLCBuYW1lKTtcbiAgICAgICAgdmFyIGhlcm9OYW1lID0gbmFtZS52YWx1ZTtcbiAgICAgICAgdmFyIGhlcm9TdHJlbmd0aCA9IHN0cmVuZ3RoLnZhbHVlO1xuICAgICAgICB2YXIgaGVyb1Bvd2VycyA9IHBvd2Vycy52YWx1ZTtcbiAgICAgICAgdmFyIGhlcm86IEhlcm8gPSB7XG4gICAgICAgICAgICBpZDp0aGlzLmhlcm9JZCsrLFxuICAgICAgICAgICAgbmFtZTogaGVyb05hbWUsXG4gICAgICAgICAgICBzdHJlbmd0aDogTnVtYmVyKGhlcm9TdHJlbmd0aCksXG4gICAgICAgICAgICBzdXBlclBvd2VyOmhlcm9Qb3dlcnNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhlcm9MaXN0LnB1c2goaGVybyk7XG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgc3RyZW5ndGgudmFsdWUgPSAnJztcbiAgICAgICAgcG93ZXJzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgbG9hZEhlcm9EZXRhaWxzKGlkOm51bWJlciwgaW5kZXg6bnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJvOiAnLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJvIGluZGV4OiAnLCBpbmRleCk7XG4gICAgICAgIHRoaXMuc2hvd0hlcm9EZXRhaWxzZkZvckluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuaGVyb0RldGFpbHMgPSB0aGlzLmhlcm9MaXN0W2luZGV4XTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUJ1dHRvbkNsaWNrZWQoaW5kZXg6bnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgdGhpcy5oZXJvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
