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
                    this.heroId = 1201; //parseInt(Math.random()*1000);
                    //public hero: Hero = {
                    //    id:this.heroId++,
                    //    name:'Rusilator'
                    //};
                    this.heroList = [
                        {
                            id: this.heroId++,
                            name: 'Rusilator'
                        },
                    ];
                    console.log("App Component Constructor");
                }
                AppComponent.prototype.addHero = function (name) {
                    if (name.length === 0) {
                        console.log('No Input');
                        return;
                    }
                    console.log("Add the Hero: ", name);
                    var hero = {
                        id: this.heroId++,
                        name: name
                    };
                    this.heroList.push(hero);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav class=\"navbar navbar-default navbar-fixed-top\">\n            <div class=\"navbar-brand\">Angular2 - Tutorial</div>\n        </nav>\n        <div class=\"containter\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                     <h1 class=\"col-xs-12 text-center\">Welcome to the Tour of Heros!</h1>\n\n                </div>\n             </div>\n             <hr />\n             <div class=\"col-sm-4\">\n                    <div class=\"col-xs-12 lead\">Hero List</div>\n                    <div class=\"col-xs-12\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"add a hero!\" #newHero (keyup.enter)=\"addHero(newHero.value)\">\n                    <hr/>\n                    </div>\n\n                    <div class=\"col-xs-12\">\n                    <ul class=\"heroList\">\n                        <li *ngFor=\"#hero of heroList\">\n                          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n                        </li>\n                    </ul>\n                    </div>\n\n             </div>\n             <div class=\"col-sm-8 \">\n                content here.\n             </div>\n        </div>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmFkZEhlcm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQTJDSUE7b0JBSEFDLFNBQUlBLEdBQVdBLE9BQU9BLENBQUNBO29CQUN2QkEsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsK0JBQStCQTtvQkFNckRBLHVCQUF1QkE7b0JBQ3ZCQSx1QkFBdUJBO29CQUN2QkEsc0JBQXNCQTtvQkFDdEJBLElBQUlBO29CQUNHQSxhQUFRQSxHQUFlQTt3QkFDMUJBOzRCQUNJQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQTs0QkFDaEJBLElBQUlBLEVBQUNBLFdBQVdBO3lCQUNuQkE7cUJBR0pBLENBQUNBO29CQWRFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwyQkFBMkJBLENBQUNBLENBQUNBO2dCQUM3Q0EsQ0FBQ0E7Z0JBZ0JERCw4QkFBT0EsR0FBUEEsVUFBUUEsSUFBV0E7b0JBQ2ZFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBLENBQ3RCQSxDQUFDQTt3QkFDR0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hCQSxNQUFNQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7b0JBQ0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXBDQSxJQUFJQSxJQUFJQSxHQUFTQTt3QkFDYkEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUE7d0JBQ2hCQSxJQUFJQSxFQUFFQSxJQUFJQTtxQkFDYkEsQ0FBQUE7b0JBQ0RBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBMUVMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLHN0Q0FpQ1RBO3dCQUNEQSxVQUFVQSxFQUFDQSxFQUFFQTtxQkFDaEJBLENBQUNBOztpQ0F3Q0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0E3RUEsQUE2RUNBLElBQUE7WUE3RUQsdUNBNkVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmludGVyZmFjZSBIZXJvIHtcbiAgICBpZDpudW1iZXIsXG4gICAgbmFtZTpzdHJpbmdcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+QW5ndWxhcjIgLSBUdXRvcmlhbDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW50ZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gdGhlIFRvdXIgb2YgSGVyb3MhPC9oMT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGxlYWRcIj5IZXJvIExpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cImFkZCBhIGhlcm8hXCIgI25ld0hlcm8gKGtleXVwLmVudGVyKT1cImFkZEhlcm8obmV3SGVyby52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoZXJvTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNoZXJvIG9mIGhlcm9MaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2hlcm8uaWR9fTwvc3Bhbj4ge3toZXJvLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggXCI+XG4gICAgICAgICAgICAgICAgY29udGVudCBoZXJlLlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIG5hbWU6IHN0cmluZyA9ICdSdXNpbCc7XG4gICAgaGVyb0lkOiBudW1iZXIgPSAxMjAxOy8vcGFyc2VJbnQoTWF0aC5yYW5kb20oKSoxMDAwKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBDb21wb25lbnQgQ29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgLy9wdWJsaWMgaGVybzogSGVybyA9IHtcbiAgICAvLyAgICBpZDp0aGlzLmhlcm9JZCsrLFxuICAgIC8vICAgIG5hbWU6J1J1c2lsYXRvcidcbiAgICAvL307XG4gICAgcHVibGljIGhlcm9MaXN0OkFycmF5PEhlcm8+ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDp0aGlzLmhlcm9JZCsrLFxuICAgICAgICAgICAgbmFtZTonUnVzaWxhdG9yJ1xuICAgICAgICB9LFxuXG5cbiAgICBdO1xuXG5cbiAgICBhZGRIZXJvKG5hbWU6c3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIElucHV0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJBZGQgdGhlIEhlcm86IFwiLCBuYW1lKTtcblxuICAgICAgICB2YXIgaGVybzogSGVybyA9IHtcbiAgICAgICAgICAgIGlkOnRoaXMuaGVyb0lkKyssXG4gICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oZXJvTGlzdC5wdXNoKGhlcm8pO1xuICAgIH1cblxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
