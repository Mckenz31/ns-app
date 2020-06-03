import { Component } from "@angular/core";


@Component ({
    selector: 'ns-current-challenges',
    templateUrl: './current-challenges.component.html',
    styleUrls: ['./current-challenges.component.css'],
    moduleId: module.id
})

export class CurrentChallengesComponent {
    enterText = "";
    publishText = "";

    onClick1(){
        this.publishText = this.enterText;
    }
}
