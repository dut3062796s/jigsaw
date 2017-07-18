import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawLoadingModule} from "jigsaw/component/loading/loading";
import {JigsawButtonModule} from "jigsaw/component/button/button";
import {ColorfulLoadingDemoComponent} from "./app.component";

@NgModule({
    declarations: [ColorfulLoadingDemoComponent],
    imports: [JigsawLoadingModule,JigsawButtonModule,CommonModule]
})
export class ColorfulLoadingDemoModule{

}
