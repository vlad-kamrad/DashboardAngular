import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../services/dashboard.service";

@Component({
    selector: 'app-sricker-form',
    template: `
        <div *ngFor="let message of messages">
            <p>{{message}}</p>
        </div>
    `
    //, providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    public messages: string[];

    constructor(private service: DashboardService) {}

    ngOnInit() {
        this.service.get().subscribe(
            (result) => {
                this.messages = result;
            },
            (error) => {
                console.log(error);
            },
            () => {
                this.messages.push('completed');
            }
        );
    }
}