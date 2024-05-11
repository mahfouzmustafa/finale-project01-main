import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';

export const approutes: Routes = [
   { path:'register' , component:RegisterComponent},
   { path: 'quiz' , component: QuizComponent},
   {path:'result', component:ResultComponent},
   {path:'' , redirectTo: '/register', pathMatch:'full'}
];
