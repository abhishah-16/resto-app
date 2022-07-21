import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor(
    private router: ActivatedRoute,
    private restoservice: RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    const index = this.router.snapshot.params['id']
    const resto = this.restoservice.getoneResto(index)
    this.editResto.setValue(
      {
        name: resto.name,
        address: resto.address,
        email: resto.email
      }
    )
  }
  closeAlert() {
    this.alert = false
  }


  updateResto() {
    const newresto = this.editResto.value
    const index = this.router.snapshot.params['id']
    this.restoservice.updateresto(index, newresto)
    this.editResto.reset()
    this.alert = true
  }
}


