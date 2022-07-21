import { Component, OnInit } from '@angular/core';
import { Resto } from '../resto.model';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  resto:Resto[]
  constructor(
    private restoservice:RestoService
  ) { }

  ngOnInit(): void {
    this.resto =  this.restoservice.getResto()
    console.log(this.resto)
  }
  onDelete(item){
    console.log(item)
    this.restoservice.deleteResto(item)
  }
}
