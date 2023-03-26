import { Component } from '@angular/core';
import { motoren } from './motoren';
import { MotorService } from './motor.service';
@Component({
selector: 'tc-motoren',
templateUrl: 'motoren.component.html',
providers: [MotorService]
})
export class MotorenComponent 
{ 

    nieuwFunctieRest()
    {
        this.motorService.naardebackend().subscribe(
            antwoord => {  //lambda
               console.log(antwoord);
               //this.spellen = antwoord;
            }
        );
    }

    motor1 : motoren = new motoren();
    motor2? : motoren;
    motorDrie : motoren = new motoren();
    motors : motoren[] = [];

    fillBikes()
    {
        let m : motoren = new motoren();
        m.kleur = "Blauw";
        this.motors.push(m);
        
        this.motorService.ditffproberen();
    }

        
    constructor(private motorService: MotorService)
    {
        this.motor1.motor = "500 cc";
        this.motor1.km = "584726";
        this.motor1.kenteken = "45-G3-XQ";
    }
    
    Merk : string = "";
    aantalWielen : number = 2;

    LaatMotorZien(value:string)
    {
        if(value == "Ducati")
        {
            this.aantalWielen = 3;
        }
        else if(value == "Yamaha")
        {
            this.aantalWielen = 88;
        }
        
        if(value == "Honda")
        {
            value = "Error, Ik heb dit verandert in code: ";
            this.aantalWielen = 12;
            this.motor1.kleur = "red";
        }

        this.Merk = value + ` met ${this.aantalWielen} wielen`;
        this.motor2 = new motoren();
        this.motor2.kenteken = "AA-QQ-OO";
    }

}