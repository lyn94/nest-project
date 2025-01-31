import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // 각각 문자열인지 유효성 체크
  readonly genres: string[];
}
