let issuedBooks = [];

function issueBook() {
  const bookName = document.getElementById('book-name').value;
  const issuedTo = document.getElementById('issued-to').value;
  const issuedTime = new Date();
  const bookStatus = 'not returned';
  const bookId = issuedBooks.length + 1;

  issuedBooks.push({
    id: bookId,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: issuedTime,
    status: bookStatus
  });

  updateIssuedBooksTable();
}

function updateIssuedBooksTable() {
  const tableBody = document.getElementById('issued-books');
  tableBody.innerHTML = '';

  issuedBooks.forEach(book => {
    const row = document.createElement('tr');
    const bookNameCell = document.createElement('td');
    const issuedToCell = document.createElement('td');
    const issuedTimeCell = document.createElement('td');
    const statusCell = document.createElement('td');

    bookNameCell.textContent = book.book_name;
    issuedToCell.textContent = book.issued_to;
    issuedTimeCell.textContent = book.issued_time.toLocaleString();
    statusCell.textContent = book.status;

    if (book.status === 'returned') {
      statusCell.classList.add('returned');
    } else {
      statusCell.classList.add('not-returned');
    }

    statusCell.addEventListener('click', () => {
      toggleBookStatus(book);
    });

    row.appendChild(bookNameCell);
    row.appendChild(issuedToCell);
    row.appendChild(issuedTimeCell);
    row.appendChild(statusCell);
    tableBody.appendChild(row);
  });
}

function toggleBookStatus(book) {
  if (book.status === 'not returned') {
    book.status = 'returned';
  } else {
    book.status = 'not returned';
  }

  updateIssuedBooksTable();
}
