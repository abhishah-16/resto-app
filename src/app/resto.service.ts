import { Injectable } from '@angular/core';
import { Resto } from './resto.model';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor() { }
  public resto: Resto[] = [
    new Resto('radhika', 'Drive-in road', 'radhika@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
    new Resto('real peprika', 'ahmedabad', 'real@gmail.com'),
  ]

  getResto() {
    return this.resto
  }

  createResto(resto) {
    this.resto.push(resto)
  }

  deleteResto(index){
    console.log(index)
    this.resto.splice(index,1)
  }

  getoneResto(index){
    return this.resto[index]
  }

  updateresto(index:number,newresto){
    this.resto[index] = newresto
  }

}
