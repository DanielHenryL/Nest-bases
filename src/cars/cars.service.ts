import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';
import { UpdateCarDto, CreateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars:Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee'
        // },
    ]   

    findAll() {
        return this.cars
    }

    findOneById( id:string ) {
        const car = this.cars.find( car => car.id === id )
        if ( !car ) throw new NotFoundException(`Car with id ${ id } not found`)
        
        return car;
    }
    create( createCarDto:CreateCarDto){
        const car:Car = {
            id:uuid(),
            ...createCarDto
        }
        this.cars.push( car )
        return car
    }
    update( id:string, updateCarDto:UpdateCarDto){

        let carDB = this.findOneById( id );

        this.cars = this.cars.map( car => {
            if ( car.id === id ) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB
            }
            return car
        })
        return carDB;
    }

    delete( id:string ){
        let carDB = this.findOneById( id );

        this.cars = this.cars.filter( car => car.id !== id )

        return carDB
    }
    fillCarsWithSeedData( cars:Car[]){
        this.cars = cars;
    }
}
