//https://api.sampleapis.com/futurama/questions
export const quizApi = async () => {
  const response = await fetch("https://api.sampleapis.com/futurama/questions");
  if (response.ok) {
    const json = await response.json();
    return { result: "success", quiz: json };
  }
  return { result: "fail", quiz: null };
};
