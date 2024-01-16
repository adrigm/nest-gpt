import { Injectable } from '@nestjs/common';
import { orthograpyUseCase } from './use-cases';
import { OrthograpyDto } from './dtos';

@Injectable()
export class GptService {
  async orthograpyCheck(orthograpyDto: OrthograpyDto) {
    return await orthograpyUseCase({ promt: orthograpyDto.promt });
  }
}
