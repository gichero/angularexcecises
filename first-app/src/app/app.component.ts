import { Component } from '@angular/core';
// import { ComptwoComponent } from './comptwo';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
    <h1>Inline Template</h1>
    <p>I'm still inline and not block</p>
    <app-comptwo></app-comptwo>
    <app-compthree></app-compthree>
    <app-compfour><div>
        <h2>Hello</h2>
        <h2>World!</h2>
    </div>
    </app-compfour>
    <app-databinding></app-databinding>
  `,
  // styleUrls: ['./app.component.css']
  styles:[`
      h1{
          color: red;
      }
      p{
          color: green;
      }

      `],

     //directives: [Compthree, Compfour]
})
export class AppComponent {
  title = 'Does this work now!!!';
}
