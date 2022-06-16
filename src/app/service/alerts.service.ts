import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(msg: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)
    bsModalRef.content.type = type
    bsModalRef.content.msg = msg
  }

  showAlertDanger(msg: string){
    this.showAlert(msg, 'danger')
  }

  showAlertInfo(msg: string){
    this.showAlert(msg, 'info')
  }

  showAlertSuccess(msg: string){
    this.showAlert(msg, 'success')
  }
}
