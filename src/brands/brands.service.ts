import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands:Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAt: new Date().getTime()
    // },
    // {
    //   id: uuid(),
    //   name: 'Honda',
    //   createAt: new Date().getTime()
    // },
  ]



  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand:Brand = {
      id: uuid(),
      name:name.toLocaleLowerCase(),
      createAt:new Date().getTime(),
      updateAt:new Date().getTime()
    }

    this.brands.push( brand );

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if ( !brand ) throw new NotFoundException(`Brand with id ${ id } not found`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandBD = this.findOne( id );

    this.brands = this.brands.map( brand => {
      if ( brand.id === id ) {
        brandBD = {
          ...brandBD,
          ...updateBrandDto,
          updateAt:new Date().getTime()
        }
        return brandBD;
      }
      return brand;
    })
    return brandBD;
  }

  remove(id: string) {
    const brandDB = this.findOne( id );

    this.brands = this.brands.filter( brand => brand.id !== id )

    return brandDB;
  }
  fillBrandsWithSeedData( brands:Brand[]){
    this.brands = brands;
  }
}
