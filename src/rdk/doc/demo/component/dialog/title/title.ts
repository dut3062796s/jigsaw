/**
 * Created by 10177553 on 2017/4/13.
 */

import {Component, TemplateRef} from '@angular/core';
import {PopupDisposer, PopupInfo, PopupService} from "../../../../../service/popup.service";

@Component({
    templateUrl: 'title.html',
})
export class DialogTitleDemo {

    private _dialogInfo1: PopupInfo;
    private _dialogInfo2: PopupInfo;

    constructor(private popupService: PopupService) {
    }

    close(info: PopupInfo) {
        info.dispose();
    }

    popupDialog1(ele: TemplateRef<any>) {
        this._dialogInfo1 = this.popupService.popup(ele);
    }

    popupDialog2(ele: TemplateRef<any>) {
        this._dialogInfo2 = this.popupService.popup(ele);
    }

}
