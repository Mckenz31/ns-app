import { Component, OnInit} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

declare var android: any

@Component ({
    selector: 'ns-current-challenges',
    templateUrl: './current-challenges.component.html',
    styleUrls: ['./current-challenges.component.css'],
    moduleId: module.id
})

export class CurrentChallengesComponent implements OnInit {

    constructor(private router: RouterExtensions) {}

    ngOnInit(): void{

    }

    onClick(){
        this.router.navigate(['/challenges-edit'], {transition: {name: 'slideLeft'}})
    }

}
