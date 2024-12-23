import { Component } from '@angular/core';
import { store } from 'src/store.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 
    newItems: store[] = [];
    newItem = { itemId: 0, quantity: 0, wantsMore: '' };
    rates: { [key: number]: number } = { 5001: 20, 5002: 25, 5003: 30, 5004: 40, 5005: 50 };
    discountItems = [5004, 5005];
  
    billAmount: number | null = null;
    total = 0;
    showPaymentOptions: boolean = false;

    addItem() {
      const { itemId, quantity, wantsMore } = this.newItem;
      if (this.rates[itemId]) {
        let price = this.rates[itemId] * quantity;
        if (this.discountItems.includes(itemId)) {
          price *= 0.8; // Apply discount if applicable
        }
        this.total += price;
  
        this.newItems.push({ itemId, quantity, wantsMore });
  
        if (wantsMore.toUpperCase() === 'N') {
          this.billAmount = this.total;
          this.reset();
        } else {
          this.newItem = { itemId: 0, quantity: 0, wantsMore: '' };
        }
      } else {
        alert('Invalid Item ID');
      }
    }
  
    reset() {
      this.newItem = { itemId: 0, quantity: 0, wantsMore: '' };
    }
  
    checkBill() {
      if (this.newItems.length === 0) {
        alert('No items in the cart!');
      } else {
        this.billAmount = this.total;
      }
    }
  
  //   pay() {
    
  //     if (this.billAmount !== null) {
  //       // You can integrate your payment gateway here
  //       alert(`Payment of $${this.billAmount} successful!`);
        
  //       // Reset the cart and total after payment
  //       this.newItems = [];
  //       this.total = 0;
  //       this.billAmount = null;
  //     } else {
  //       alert('Please check the bill first!');
  //     }
  //   }


  // handlePayment(paymentMethod: string) {
  //   // Simulate payment success
  //   alert(`Payment using ${paymentMethod} was successful!`);

  //   // Reset the cart after payment
  //   this.newItems = [];
  //   this.total = 0;
  //   this.billAmount = null;
  //   this.showPaymentOptions = false; // Hide payment options after payment
  // }

  // cancelPayment() {
  //   this.showPaymentOptions = false; // Close payment modal if cancelled
  // }
  }
  
