function findAccountById(accounts, id) {
   return accounts.find((accounts) => accounts.id === id)
}
function sortAccountsByLastName(accounts) { 
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last.toLowerCase()
    const lastNameB = accountB.name.last.toLowerCase()
    return lastNameB < lastNameA ? 1 : -1
  })
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  const result = books.filter(book => {
        book.borrows.filter(borrow => {
        if (borrow.id === account.id) {
          total++
        }
      })
    })
  return total
}
function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account 
  const possessedBooks = books.filter(book => {
  const borrows = book.borrows
  return borrows.some(borrow => {
    return borrow.id === id && !borrow.returned
  })})
  possessedBooks.forEach(book => {
    book.author = authors.find(author => author.id === book.authorId)
  })
  return possessedBooks
  }
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
