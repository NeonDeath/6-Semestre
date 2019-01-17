import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info = InfoPage;
  favo = FavPage;
  favoritos = [];

  constructor(public navCtrl: NavController) {

  }

  casa= [
    {
      id:0,
      nombre: "Verde Valle",
      ubicacion: "Guadalajara",
      precio: "$9,000",
      imagen: '../assets/1.jpeg',
      vendedor: "Liliana Hernández Luquín",
      recamaras: "3",
      banos: "2 completos"

    },

    {
      id:1,
      nombre: "Casa en venta",
      ubicacion: "Chapalita",
      precio: "$5,100,000",
      imagen: '../assets/2.jpg',
      vendedor: "FERNANDO TOLEDO",
      recamaras: "3",
      banos: "2 y medio"

    },

    {
      id:2,
      nombre: "Barrio Analco",
      ubicacion: "Guadalajara",
      precio: "$3,900,000",
      imagen: '../assets/3.jpg',
      vendedor: "ricardo sotomayor mendoza",
      recamaras: "4",
      banos: "2 y medio"

    },

    {
      id:3,
      nombre: "BUSCAS CASA?",
      ubicacion: "Zapopan",
      precio: "$1,335,000",
      imagen: '../assets/4.jpg',
      vendedor: " JOSE LUIS GARCIA CARDENAS",
      recamaras: "3",
      banos: "3 completos"
    },

    {
      id:4,
      nombre: "6 casas ubica",
      ubicacion: "Colon Industrial",
      precio: "$1,660,000",
      imagen: '../assets/5.jpg',
      vendedor: " Fernando Madrigal Diaz",
      recamaras: "3",
      banos: "1 y medio"
    },


    // ----------------------------------------------

    {
      id:5,
      nombre: "Bosques De La Victoria",
      ubicacion: "Guadalajara",
      precio: "$ 7,800,000.00",
      imagen: '../assets/6.jpg',
      vendedor: "  Antonia Reveles Espino",
      recamaras: "3",
      banos: "4"

    },

    {
      id:6,
      nombre: "Tenemos la Casa de tus sueños",
      ubicacion: "Zapopan",
      precio: "$1,890,000",
      imagen: '../assets/7.jpg',
      vendedor: " JOSE LUIS GARCIA CARDENAS",
      recamaras: "2",
      banos: "1 completo"

    },

    {
      id:7,
      nombre: "Valle Real",
      ubicacion: "Zapopan",
      precio: "$ 14,990.00 × Mes",
      imagen: '../assets/8.jpg',
      vendedor: " IGEA TIERRA, VIDA Y ESPACIO",
      recamaras: "3",
      banos: "3 y medio"

    },

    {
      id:8,
      nombre: "Coto Armandina privado con seguridad solo 80 casas!",
      ubicacion: "Tlajomulco",
      precio: "$ 1,350,000.00",
      imagen: '../assets/9.jpeg',
      vendedor: " Sareth Briseño ",
      recamaras: "3",
      banos: "2"

    },

    {
      id:9,
      nombre: "Escoge colonia",
      ubicacion: "Guadalajara",
      precio: "$ 1.00",
      imagen: '../assets/10.jpg',
      vendedor: " Maricruz Hernández",
      recamaras: "3",
      banos: "1 completo"

    }
  ]

  clickCasa(c)
  {
    this.navCtrl.push(this.info, {casa: c, favoritos: this.favoritos});

  }

  clickFavo()
  {
    this.navCtrl.push(this.favo, {favoritos: this.favoritos});
  }
}
