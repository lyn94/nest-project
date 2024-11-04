import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // controller: express.js의 라우터 같은 역할, url을 가져오고 함수를 실행
  providers: [], // service: 함수들이 있는 곳, 비즈니스 로직
})
export class AppModule {}
