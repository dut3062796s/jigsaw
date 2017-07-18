import {NgModule} from "@angular/core";
import {JigsawGraphModule} from "jigsaw/component/graph/index";
import {BasicGraphComponent} from "./app.component";
@NgModule({
    declarations: [BasicGraphComponent],
    imports: [JigsawGraphModule]
})
export class BasicGraphModule{

}
