interface Options {
  promt: string;
}

export const orthograpyUseCase = async (options: Options) => {
  const { promt } = options;

  return {
    promt: promt,
  };
};
