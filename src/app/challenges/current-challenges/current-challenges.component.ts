import { Component, OnInit} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';

declare var android: any

@Component ({
    selector: 'ns-current-challenges',
    templateUrl: './current-challenges.component.html',
    styleUrls: ['./current-challenges.component.css'],
    moduleId: module.id
})

export class CurrentChallengesComponent implements OnInit {

    constructor(private router: RouterExtensions, private page: Page) {}

    ngOnInit(): void{

    }

    onClick(){
        this.router.navigate(['/challenges-edit'])
    }
    onLoad(){
        if (isAndroid) {
            const androidToolBar = this.page.actionBar.nativeView;
            const backButton = androidToolBar.getNavigationIcon();
            if(backButton){
                backButton.setColorFilter(android.graphics.Color.parseColor('#171717'),
                (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
            }
        }
    }
}
