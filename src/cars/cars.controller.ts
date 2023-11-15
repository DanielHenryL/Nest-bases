import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number ){ 
        return {
            result:this.carsService.findOneById(id)
        }
    }

    @Post()
    createCar( @Body() body:any){
        return body;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe ) id:number,
        @Body() body:any)
    {
        return body   
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id:number){
        return {
            method:'Delete',
            id
        }
    }
}
