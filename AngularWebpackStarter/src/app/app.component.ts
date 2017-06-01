import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: string;
    constructor(private http: Http) {
        this.http.get('api/my').subscribe((value) => {
            this.message = value.json();
        });
    }
}
