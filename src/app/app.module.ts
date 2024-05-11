import { BrowserModule } from "@angular/platform-browser";
import { NgModel } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";
import { NgModule } from "@angular/core";
import { approutes } from "./app.routes";

@NgModule({

    declarations: [
        AppComponent,
        RegisterComponent,
        NavbarComponent,
        QuizComponent,
        ResultComponent

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(approutes)
    ],
    providers: [],
    bootstrap: [AppComponent]

})