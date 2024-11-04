import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies') //entry point
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies'
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){ // 파라미터 값 받기
        return `This will return one movie whit the id: ${movieId}`
    }

    @Post()
    create() {
        return 'This will create a movie'
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id: ${movieId}`
    }

    // @Put: 전부다 수정, @Patch: 일부만 수정
    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `This will patch a movie with the id: ${movieId}`
    }

}
