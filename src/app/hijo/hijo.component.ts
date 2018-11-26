import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() public nombre: string;
  @Output() private pedirDinero: EventEmitter<number>;
  private cantidad = 0;

  constructor() {this.pedirDinero = new EventEmitter<number>(); }

  ngOnInit() {

  }

  onPedirDinero(event) {
    this.pedirDinero.emit(this.cantidad);
  }

}
