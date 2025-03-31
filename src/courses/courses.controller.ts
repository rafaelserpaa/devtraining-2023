import { Body, Controller, Delete, Get, Put, HttpCode, Param,Post, Res } from '@nestjs/common';
import { get } from 'http';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-couse.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { 
        
    }

    @Get()
    findAll() { 
        
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coursesService.findOne(id);
    }
    @Post()
    create(@Body() CreateCourseDTO : CreateCourseDTO) {
        return this.coursesService.create(CreateCourseDTO);
    }
    
     @Put(':id')
     update(@Param('id') id: string, @Body() UpdateCourseDTO: UpdateCourseDTO) {
         return this, this.coursesService.update(id, UpdateCourseDTO);
     }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesService.remove(id);
    }
}
