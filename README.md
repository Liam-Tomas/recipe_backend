# CS-361-MicroCode - COMMUNICATION CONTRACT

_____________________
### Make sure to run 'npm install' and 'npm start' before requesting information.
### You will need to install Node.js if you have not already.
#### Make sure to create a .env file with the following information:
    PORT=3000
    MONGODB_CONNECT_STRING='mongodb+srv://admin:admin@osucluster.wskrziw.mongodb.net/exercises?retryWrites=true&w=majority'
I created a mongoDB you can use for this project.
_____________________

#### Request Example: Search for a range of books based on the following criteria:
         book_type: nonfiction
         reading_level: intermediate
         categories: Mystery & Suspense; Science Fiction & Fantasy

GET http://localhost:3000/books?book_type=nonfiction&reading_level=intermediate&categories=Mystery%20%26%20Suspense&59&20Science&20Fiction&20%26%20Fantasy HTTP/1.1

##NOTES: 

  Valid Options for book_type are: fiction, nonfiction, or leave it empty (both)
  
  Valid Options for reading_level are: beginner, intermediate, and advanced.
    These are case-sensitive.

  Valid Options for book_type are: fiction, nonfiction, or leave it empty (both)

  Available categories include: ['Animals, Bugs & Pets', 'Art, Creativity & Music',      
  'General Literature', 'Hobbies, Sports & Outdoors', 'Science Fiction & Fantasy', 
  'Real Life', 'Science & Technology', 'Mystery & Suspense', 'Reference']

  To write a space or " " character, use %20.
  
  To write a "&" character, use %26.
  
  To write a semi-colon or ";" character, use &59.
  
  Again, you need to use a semi-colon to seperate each category.
  
![diagram](https://user-images.githubusercontent.com/72411904/236992830-1d300bd4-67ee-4853-bad3-6ca169279f61.png)

