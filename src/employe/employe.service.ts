import { Injectable } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Employe} from "./entities/employe.entity";
import {Repository} from "typeorm";

@Injectable()
export class EmployeService {

  constructor(
      @InjectRepository(Employe) private employeRepository: Repository<Employe>,
  ) {}

  create(CreateEmployeDto: CreateEmployeDto): Promise<Employe> {
    const employe = this.employeRepository.create(CreateEmployeDto)
    return this.employeRepository.save(employe);
  }

  async findAll(): Promise<Employe[]> {
    return this.employeRepository.find();
  }

  async findOne(id: number): Promise<Employe> {
    return this.employeRepository.findOne({where: { id }});
  }

  async update(id: number, UpdateEmployeDto: UpdateEmployeDto): Promise<Employe> {
    const employe = this.employeRepository.create({ id, ...UpdateEmployeDto});
    return this.employeRepository.save(employe);
  }

  remove(id: number) {
    return this.employeRepository.delete({id});
  }
}
