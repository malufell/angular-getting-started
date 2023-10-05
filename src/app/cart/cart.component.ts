import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    window.alert('seu pedido foi enviado');
    console.warn('dados do usuário', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
