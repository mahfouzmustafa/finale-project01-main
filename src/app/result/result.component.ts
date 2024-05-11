import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-result',
    standalone: true,
    templateUrl: './result.component.html',
    styleUrl: './result.component.css',
    imports: [NavbarComponent]
})
export class ResultComponent {

}
