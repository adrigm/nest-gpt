import { IsInt, IsOptional, IsString } from 'class-validator';

export class OrthograpyDto {
  @IsString()
  readonly promt: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
