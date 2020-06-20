import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular';
import { AuthComponent } from './auth/auth.component';
import { Routes } from '@angular/router';
import { TodayComponent } from './challenges/today/today.component';
import { ChallengesEditComponent } from './challenges/challenges-edit/challenges-edit.component';
import { CurrentChallengesComponent } from './challenges/current-challenges/current-challenges.component';
import { ChallengeTabComponent } from './challenges/challenge-tab/challenge-tab.component';


const routes: Routes = [
    { path: '' , component: AuthComponent},
    { path: 'challenges-edit', component: ChallengesEditComponent},
    { path: 'challenges-tab', component: ChallengeTabComponent, children:[
        { path: 'today' ,component: TodayComponent, outlet: 'today' },
        { path: 'current-challenges', component: CurrentChallengesComponent, outlet: "CurrentChallenge" },
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule{

}
