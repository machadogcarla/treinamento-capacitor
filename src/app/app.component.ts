import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'dag-treinamento';
  latitude: any;
  longitude: any;
  bateria: any;
  sistemaOperacional: string = '';
  nomeDisp: any = '';
  versaoSo: any;

  constructor() { }

  ngOnInit(): void {
    this.locate();
    this.deviceInfo();
  }

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  async deviceInfo(){
    const info = await Device.getInfo();
    this.sistemaOperacional = info.operatingSystem;
    this.nomeDisp = info.name;
    this.versaoSo = info.osVersion;

    const bateria = await Device.getBatteryInfo();
    this.bateria = bateria.batteryLevel;
  }

}




