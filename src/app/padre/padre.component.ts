import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public gasto = 0;
  constructor() { }

  ngOnInit() {
  }

  onDineroPedido(cantidad: number) {
    console.log('Te han pedido ', cantidad, ' euros');
    this.gasto += cantidad;
  }

}
