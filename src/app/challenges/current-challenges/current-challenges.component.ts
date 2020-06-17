import { Component, Input } from "@angular/core";
import {ItemEventData} from "tns-core-modules/ui/list-view";


@Component ({
    selector: 'ns-current-challenges',
    templateUrl: './current-challenges.component.html',
    styleUrls: ['./current-challenges.component.css'],
    moduleId: module.id
})

export class CurrentChallengesComponent {

    @Input()   publishText: string[] = [];

    onItemTap(args: ItemEventData){
        console.log(args);
    }

}
