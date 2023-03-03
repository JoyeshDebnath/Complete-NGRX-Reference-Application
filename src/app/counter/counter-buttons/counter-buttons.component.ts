import { Component, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterStateInterface } from "./../types/counterState.interface";
import { increment, decrement, reset } from "../store/counter.actions";
import { AppStateInterface } from "./../../types/appState.interface";
@Component({
	selector: "app-counter-buttons",
	templateUrl: "./counter-buttons.component.html",
	styleUrls: ["./counter-buttons.component.scss"],
})
export class CounterButtonsComponent {
	constructor(private store: Store<AppStateInterface>) {}
	onIncrement() {
		this.store.dispatch(increment());
	}
	onDecrement() {
		this.store.dispatch(decrement());
	}

	onReset() {
		this.store.dispatch(reset());
	}
}
