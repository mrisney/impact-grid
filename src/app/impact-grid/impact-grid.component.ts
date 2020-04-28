import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'impact-grid',
  template: `
    <p>
      impact-grid works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ImpactGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
