import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registroper',
  templateUrl: './registroper.page.html',
  styleUrls: ['./registroper.page.scss'],
})
export class RegistroperPage implements OnInit {

  nombre: string | undefined;
  correo: string | undefined;
  contrasena: string | undefined;

  constructor(private alertController: AlertController) { }

  async registrar() {
    
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Te has registrado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  


  ngOnInit() {
  }

}
