import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/counter.reducer";
// components
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { COUNTER_STATE_NAME } from "./counter.state.name";
//routes ..
const routes: Routes = [
	{
		path: "",
		component: CounterComponent,
	},
];
// routes
@NgModule({
	declarations: [
		CounterComponent,
		CounterButtonsComponent,
		CounterOutputComponent,
		CustomCounterComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
	],
	providers: [],
})
export class CounterModule {}
