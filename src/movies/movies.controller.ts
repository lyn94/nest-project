import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies') //entry point
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies'
    }

    @Get("search") // 파라미터 받는 것보다 아래에 코드가 위치하면 search를 :id로 인식한다. (express.js도 동일)
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') movieId: string){ // 파라미터 값 받기
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    create(@Body() movieData) {
        return movieData
    }

    @Delete(":id")
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id: ${movieId}`
    }

    // @Put: 전부다 수정, @Patch: 일부만 수정
    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }
}
