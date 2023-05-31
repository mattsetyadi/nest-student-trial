import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { StudentsModule } from '../student/student.module';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentsModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
