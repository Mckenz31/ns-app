import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ns-challenges-edit',
  templateUrl: './challenges-edit.component.html',
  styleUrls: ['./challenges-edit.component.css'],
  moduleId: module.id
})
export class ChallengesEditComponent {

    @Output() input = new EventEmitter<string>();

    enterText = '';

    onClick1(){
        // this.publishText = this.enterText;
        this.input.emit(this.enterText)
    }

}
