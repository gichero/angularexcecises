import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  //directives: [PropertyBindingComponent]
})
export class DatabindingComponent {

    stringInterpolation = "This is string interpolation";
    numberInterpolation = 3;

    onTest() {
    return true;
    }

    onClicked(value: string) {
        alert(value);
    }
}
