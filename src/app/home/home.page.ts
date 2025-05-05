import { HttpRequest } from '@angular/common/module.d-CnjH8Dlt';
import { Component } from '@angular/core';
import { URLOpenListener } from '@capacitor/app';
import axios, {isCancel, AxiosError, formToJSON} from 'axios';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';

interface DogResponse {
  message: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  dogImageUrl: string = '';
  
    dogimage():void {
    const options = {
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/image/random',
    }
  
    axios.get<DogResponse>(options.url)
    .then((response) => {
      
      if (response.data.status === 'success') {
        this.dogImageUrl = response.data.message;
        console.log('Imagem:', this.dogImageUrl);
      } else {
        console.error('Erro na resposta:', response.data);
      }
    })
    .catch((error) => {
      console.error('Erro na requisição:', error);
    });
  }

  constructor(){}
   
}







