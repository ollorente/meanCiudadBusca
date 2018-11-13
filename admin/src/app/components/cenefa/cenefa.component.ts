import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenefa',
  templateUrl: './cenefa.component.html',
  styleUrls: ['./cenefa.component.scss']
})
export class CenefaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNew() {
    console.log('Click en Nuevo desde Cenefa');
  }
}
