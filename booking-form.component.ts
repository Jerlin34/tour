import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
})
export class BookingFormComponent {
  traveler = {
    name: '',
    email: '',
    destination: '',
    date: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/api/book', this.traveler)
      .subscribe(response => {
        console.log('Booking successful', response);
        // Reset the form or navigate as needed
      }, error => {
        console.error('Error creating booking', error);
      });
  }
}
