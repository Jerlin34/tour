import { Component } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent {
  booking = {
    name: '',
    destination: '',
    date: ''
  };

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    this.bookingService.createBooking(this.booking).subscribe(response => {
      console.log('Booking successful:', response);
      // Handle success (e.g., show a message)
    }, error => {
      console.error('Error booking:', error);
      // Handle error (e.g., show an error message)
    });
  }
}
