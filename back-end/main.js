const url = "https://6734a04fa042ab85d11af98b.mockapi.io/Animal";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    data.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "data-item";
      itemDiv.innerHTML = `
        <p><strong>ID:</strong> ${item.id}</p>  
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Age:</strong> ${item.age}</p>
        <p><strong>Race:</strong> ${item.race}</p>
        <hr>
      `;
      container.appendChild(itemDiv);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

function adicionar() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: '51',
            name: 'Totó',
            age: '12',
            race: 'cachorro'
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Novo dado adicionado com sucesso!");
            exibirDados();
        })
        .catch(err => {
            console.error("Erro ao adicionar o dado:", err);
        });
}