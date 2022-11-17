
const app = Vue.createApp({
    data() {
        return {
            books: [
                {showBook: true,
                title: 'Lord of the Rings',
                author: 'JRR Tolkien'
                },
                
                {showBook: true,
                title: 'Bilbo',
                author: 'JRR Tolkien'
                }
            ]
        }
    },
    methods: {
        toggleBook(e) {
            console.log(e)
            e.showBook = !e.showBook
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.showBook)
        }
    }
})

app.mount('#app')
