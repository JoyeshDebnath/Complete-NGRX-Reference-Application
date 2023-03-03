import { Component, Input, OnInit } from "@angular/core";
import { CounterStateInterface } from "./../types/counterState.interface";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getCounter } from "./../store/counter.selectors";
import { AppStateInterface } from "./../../types/appState.interface";

@Component({
	selector: "app-counter-output",
	templateUrl: "./counter-output.component.html",
	styleUrls: ["./counter-output.component.scss"],
})
export class CounterOutputComponent implements OnInit {
	counter: number;
	counter$: Observable<CounterStateInterface>; //observable..
	constructor(private store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		// this.store.select('counter').subscribe((data) => {
		//   console.log(data);
		//   this.counter = data.counter;
		// this.counter$ = this.store.select('counter');
		this.store
			.select(getCounter)
			.subscribe((counterData) => (this.counter = counterData));
	}
}
