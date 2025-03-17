﻿function parseCount(numberOfUnits){
    let parseNumber = Number.parseFloat(numberOfUnits);
    if (isNaN(parseNumber)){
        throw new Error("«Невалидное значение»");
        }
    return parseNumber;
    }

    function validateCount(numberOfUnits) {
       try {
        return parseCount(numberOfUnits);
       } catch (error) {
            return error;
       }
       
    }



    class Triangle{
        constructor(a, b, c){
            if ((a + b) < c && (a + c) < b && (b + c) < a)
                {
                    throw new Error("Треугольник с такими сторонами не существует");
                }
                this.a = a;
                this.b = b;
                this.c = c;
            }
        

        get perimeter(){
            return this.a + this.b + this.c;
        }

        get area(){
          let p = this.perimeter / 2;
          return Number(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
        }
    }

    function getTriangle(a, b, c) {
        try{
            return new Triangle(a, b, c);
        }
        catch(error){
            return{
                get perimeter(){
                    return "Ошибка! Треугольник не существует";
                },
                get area(){
                    return "Ошибка! Треугольник не существует";
                }
            }
        }
    }