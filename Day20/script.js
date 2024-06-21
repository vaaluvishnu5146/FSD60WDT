// const prom1 = new Promise((resolve, reject) => {
//   resolve("Hurrah!!");
// });

// prom1
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// function oddOrEven(num = 0) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) resolve("Even Number");
//     else reject("Odd Number");
//   });
// }

// async function run(num = 0) {
//   let result = 0;
//   try {
//     result = await oddOrEven(num);
//     console.log(result);
//   } catch (error) {
//     console.log("=>", error);
//   }
// }

// run(9);
// run(10);
// run(11);
// run(12);

const tableBody = document.getElementById("task-table-body");

var data = [];
let paginationConfig = {
  perPage: 10,
  start: 0,
  end: 10,
};

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => {
      data = json;
      initiatePagination(json);
    })
    .catch((error) => console.log(error));
}

function renderTableRows(data = []) {
  const nodes = [];
  data.forEach((el) => {
    nodes.push(createRow(el));
  });
  tableBody.innerHTML = "";
  tableBody.append(...nodes);
}

function createRow(data = {}) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${data.userId}</th>
    <td>${data.id}</td>
    <td>${data.title}</td>
    <td>${data.completed}</td>
    `;
  return tr;
}

function initiatePagination(data = []) {
  const listItemContainer = document.getElementById("pagination-list");
  const nodes = [];
  const pages = data.length / paginationConfig.perPage;

  // Slice the array for given range
  renderTableRows(data.slice(paginationConfig.start, paginationConfig.end));

  for (i = 1; i <= pages; i++) {
    nodes.push(createPaginationListItem(i));
  }
  listItemContainer.append(...nodes);
}

function createPaginationListItem(data = "") {
  const li = document.createElement("li");
  li.setAttribute("class", "page-item");
  li.setAttribute("id", `page-item-${data}`);
  li.innerHTML = `
    <span onclick="handlePageChange('${data}')" class="page-link" href="#">
        ${data}
      </span>
      `;
  return li;
}

function handlePageChange(page = "") {
  const currPage = Number(page);
  const start = (currPage - 1) * paginationConfig.perPage;
  const end = paginationConfig.perPage * currPage;
  paginationConfig = {
    ...paginationConfig,
    start: Number(page) === 1 ? 0 : start,
    end,
  };
  renderTableRows(data.slice(start, end));
}

getTodos();
