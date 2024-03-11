import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000/issues';

async function createIssue(title, description) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });
  const data = await response.json();
  console.log(data);
}

async function getAllIssues() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);
}

async function getIssueById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  console.log(data);
}

async function updateIssue(id, title, description) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });
  const data = await response.json();
  console.log(data);
}

async function deleteIssue(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  console.log(data);
}


createIssue('Nova Issue', 'Descrição da Nova Issue');
getAllIssues();
getIssueById(1);
updateIssue(1, 'Título Atualizado', 'Descrição Atualizada');
deleteIssue(1);
