import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    enteredChallenge: string[] = [];

    onChallengeInput(enterText: string){
        this.enteredChallenge.push(enterText);
    }
 }
