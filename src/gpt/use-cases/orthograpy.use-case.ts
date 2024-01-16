import OpenAI from 'openai';

interface Options {
  promt: string;
}

export const orthograpyUseCase = async (openai: OpenAI, options: Options) => {
  const { promt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Se te darán textos con errores ortográficos y gramaticales y deberás corregirlos. Debes responder al usuario en formato JSON. Debes corregirlos y retornar las correcciones. también debes dar un porcentaje de aciertos basandote en el numero de errores y la longitud del texto.

        Si no hay errores debes retornar un mensaje de felicitaciones y un porcentaje de aciertos de 100%.

        Ejemplo de salida:
        {
            userScore: number,
            errors: string[], // ['error -> solución', 'error -> solución']
            message: string, // Usa emojis y texto para felicitar al usuario
        }

        `,
      },
      {
        role: 'user',
        content: promt,
      },
    ],
    model: 'gpt-4',
    temperature: 0.3,
    max_tokens: 150,
    // response_format: {
    //   type: 'json_object',
    // },
  });

  console.log(completion);

  const jsonResponse = JSON.parse(completion.choices[0].message.content);

  return jsonResponse;
};
