import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

  constructor( 
    private readonly carsService:CarsService, 
    private readonly BrandsService: BrandsService 
  ){}


  populateDB() {

    // CARS_SEED
    this.carsService.fillCarsWithSeedData( CARS_SEED );
    // BRANDS_SEED
    this.BrandsService.fillBrandsWithSeedData( BRANDS_SEED );
    
    return 'SEED executed'
  }
}
