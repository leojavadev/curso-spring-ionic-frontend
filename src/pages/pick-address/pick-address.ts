import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Tereza",
        numero: "50",
        complemento: "",
        bairro: "Centro",
        cep: "36251478",
        cidade: {
          id: "1",
          nome: "Matias Barbosa",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua B",
        numero: "720",
        complemento: "Apto 603",
        bairro: "Encosta do Sol",
        cep: "36568974",
        cidade: {
          id: "2",
          nome: "Viçosa",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      }
    ]
  }

}
