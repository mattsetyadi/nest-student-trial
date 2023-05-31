import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Injectable } from '@nestjs/common';
import { teachers } from '../db';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(id: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === id;
    });
  }
}
