import { Book } from "../model/book.model"

export const fakeId = "632130d41623c49bf7b1c7e9";
export const fakeAuthor = "J.K.Rowling";
export const fakeLanguage = ["Arabe, Portugues, Espanhol"]
const mockDate = new Date()
export const fakeBookData: Book[] =
    [
        {
            title: "Harry Potter e a Pedra Filosofal",
            language: ["ingles, Portugues, Espanhol"],
            statusBooks: true,
            author: "J.K.Rowling",
           

        },
        {
            title: "O Senhor dos Anéis",
            language: ["Alemao, Portugues, Espanhol"],
            statusBooks: true,
            author: "J.R.R.Tolkien",
        },
        {
            title: "O Senhor dos Anéis",
            language: ["Alemao, Portugues, Espanhol"],
            statusBooks: true,
            author: "J.R.R.Tolkien",
        },


        {
            title: "O Senhor dos Anéis",
            language: ["Alemao, Portugues, Espanhol"],
            statusBooks: true,
            author: "J.R.R.Tolkien",
            // review:[{
            //     _id:"632130d41623c49bf7b1c7e9",
            //     title: "Harry Potter e a Pedra Filosofal",
            //     review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],
            //     updateAt: [mockDate],
            //     note: 4
            // }]
            
        }, 


    ]
/**
 *  review:[{
                _id:"632130d41623c49bf7b1c7e9",
                title: "Harry Potter e a Pedra Filosofal",
                review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],
                updateAt: [mockDate],
                note: 4
            }]
 */
export const updateBook: Book = {

    title: "As Cronicas de Narnia",
    language: ["Arabe, Portugues, Espanhol"],
    statusBooks: false,
    author: "C.S Lews",


}
// export const updateLanguaeBook: Book = {

//     title: "O Senhor dos Anéis",
//     language: ["Arabe, Portugues, Espanhol"],
//     statusBooks: true,
//     author: "J.R.R.Tolkien",


// }



