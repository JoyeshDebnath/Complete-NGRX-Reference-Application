import { Component, OnInit } from "@angular/core";
import { CounterStateInterface } from "./../types/counterState.interface";
import { Store } from "@ngrx/store";
import { customIncrement } from "../store/counter.actions";
import { getChannelName } from "../store/counter.selectors";
import { Observable } from "rxjs";
import { AppStateInterface } from "./../../types/appState.interface";
@Component({
	selector: "app-custom-counter",
	templateUrl: "./custom-counter.component.html",
	styleUrls: ["./custom-counter.component.scss"],
})
export class CustomCounterComponent implements OnInit {
	channelName$: Observable<string>;
	value: number;
	constructor(private store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		// this.store
		//   .select(getChannelName)
		//   .subscribe((channelNameData) => (this.channelName = channelNameData));
		this.channelName$ = this.store.select(getChannelName);
	}
	onAdd(): void {
		this.store.dispatch(customIncrement({ value: +this.value }));
	}
}
