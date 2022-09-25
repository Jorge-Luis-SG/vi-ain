import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  data:any;
  texto : string =""
  formulario = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    rank: new FormControl(''),
    helpYou: new FormControl(''),
    product: new FormControl(''),
    metas: new FormControl(''),
    time: new FormControl(''),

  });
  async enviar(){

    console.log(this.formulario.value)
    let data = this.formulario.value
    this.formulario.reset()

    this.http.post('http://localhost:3000/send-mail', data).subscribe(response => {
      console.log(response);
      console.log("hola mundo")
    })
   }

  constructor(private title: Title, private http: HttpClient) {
    title.setTitle('Vi-ain | Contáctanos | Desarrollo Blockchain');
  }

  tack() {
    let itemTech = [];
    if ($('.techs:checked').length > 3) {
      alert('Solo puedes seleccionar 3 tecnologias');
      console.log($('.techs:checked').last().prop('checked', false));
      return;
    }
    let newArray = [];
    $('.techs').each((index, elem) => {
      if ($(elem).prop('checked')) {
        $(elem).addClass('tech-active');
        newArray.push($(elem).val());
        $("label[for='" + $(elem).val() + "']").addClass('tech-active');
        return;
      }
      $("label[for='" + $(elem).val() + "']").removeClass('tech-active');
    });
    itemTech = [newArray];
    console.log(itemTech);
  }

  price = 'none';
  form = 'none';
  priceOn() {
    this.price = 'flex';
    this.form = 'block';
  }
  priceOff() {
    this.price = 'none';
    this.form = 'block';
  }

  ngOnInit(): void {

     let mensaje=() =>{
        console.log('response is ');
     }
  }
}
export class ProfileEditorComponent {

}
