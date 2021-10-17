const libraryBooks = ['Economics','Literature','Mathematics'];
const rentedCopies = ['English'];
const bookLending = {
    AvailableBooks: () => {
                     return libraryBooks;
                  },

    AddBooks: (book) => {
        libraryBooks.push(book);
    },              

    RentBooks: () => {
            
        for(let i = 0; i < libraryBooks.length; i++) {
                     if(libraryBooks[i].includes('Economics')) {
                         var rentbook = libraryBooks[i].includes('Economics');
                         if(rentbook == true){
                            libraryBooks.splice(0, 1);
                            rentedCopies.push('Economics');
                            return "You have successfully rented Economics Book"
                         } 
                     
                        }
                    }
    },
    ReturnBooks: () => {
            if(rentedCopies.includes('English')) {
                var pickbook = rentedCopies.includes('English');
                if(pickbook){
                   rentedCopies.splice(0, 1);
                   libraryBooks.push('English');
                   
            
               return "You have successfully returned English Book" 
            
            } 
               }
            
    }
};
module.exports = bookLending;


