import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { EnderecoService } from '../../service/endereco.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelefoneService } from '../../service/telefone.service';
import { ProcessoService } from '../../service/processo.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formGroup : FormGroup;

  constructor(public navCtrl: NavController,
              public service: EnderecoService,
              public service2: TelefoneService,
              public formBuilder : FormBuilder) {
      
    this.formGroup = this.formBuilder.group({
      // Campos do formulário
      cep : ['', [Validators.required, 
        Validators.minLength(8), Validators.maxLength(8)]]
    });

  }

  buscaCEP(){
    
    this.service.getEndereco(this.formGroup.value['cep'])
      .subscribe(response => {
        console.log(response);
      });


  }



}
