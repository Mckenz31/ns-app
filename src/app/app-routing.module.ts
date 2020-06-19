import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular';
import { AuthComponent } from './auth/auth.component';
import { Routes } from '@angular/router';
import { TodayComponent } from './challenges/today/today.component';
import { ChallengesEditComponent } from './challenges/challenges-edit/challenges-edit.component';
import { CurrentChallengesComponent } from './challenges/current-challenges/current-challenges.component';


const routes: Routes = [
    { path: '' , component: AuthComponent},
    { path: 'today' ,component: TodayComponent},
    { path: 'current-challenges', component: CurrentChallengesComponent},
    { path: 'challenges-edit', component: ChallengesEditComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule{

}
