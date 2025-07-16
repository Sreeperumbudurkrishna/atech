import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl:"./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();

    constructor() {
        // You can add any initialization logic here if needed
    }
}