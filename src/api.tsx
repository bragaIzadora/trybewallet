export async function API() {
  try {
    const dataAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await dataAPI.json();
    console.log(response);

    return response;
  } catch (error) {
    return 'Erro ao carregar os dados da API. Por favor, tente novamente mais tarde.';
  }
}
