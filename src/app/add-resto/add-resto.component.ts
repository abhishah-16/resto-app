import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Resto } from '../resto.model';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean = false
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(
    private restoservice:RestoService
  ) { }

  ngOnInit(): void {
  }
  createResto() {
   let resto = this.addResto.value
   this.restoservice.createResto(resto)
   this.addResto.reset()
   this.alert = true
  }
  closeAlert(){
    this.alert = false
  }
}
