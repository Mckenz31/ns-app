import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-challenge-tab',
  templateUrl: './challenge-tab.component.html',
  styleUrls: ['./challenge-tab.component.css'],
  moduleId: module.id,
})
export class ChallengeTabComponent implements OnInit {

  constructor(private router: RouterExtensions, private active: ActivatedRoute) { }

    ngOnInit(): void {
        this.router.navigate([{outlets: {CurrentChallenge: ['current-challenges'] , today: ['today']}}],
            {
            relativeTo: this.active
            }
        );

    }

}
