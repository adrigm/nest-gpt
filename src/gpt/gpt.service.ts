import { Injectable } from '@nestjs/common';
import { orthograpyUseCase } from './use-cases';
import { OrthograpyDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthograpyCheck(orthograpyDto: OrthograpyDto) {
    return await orthograpyUseCase(this.openai, {
      prompt: orthograpyDto.prompt,
    });
  }
}
