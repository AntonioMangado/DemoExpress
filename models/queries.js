const queries = {
    getEntriesByEmail: `
                SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                WHERE a.email=$1
                ORDER BY e.title;`,

    getAllEntries: `
                SELECT e.title, e.content, e.date, e.category, au.name, au.surname, au.image
                FROM entries AS e
                INNER JOIN authors AS au ON e.id_author = au.id_author;`,

    createEntry: `
                INSERT INTO entries(title,content,id_author,category) 
                VALUES ($1,$2,
                (SELECT id_author FROM authors WHERE email=$3),$4)`,

    updateEntry: `
                UPDATE entries as e
                SET title=$1, content=$2, category=$3
                WHERE title=$4;`,

    deleteEntry: `
                DELETE from entries
                WHERE title=$1;`,

    getAllAuthors: 
                `SELECT *
                FROM authors;
                `,

    getAuthorsByEmail: 
                `SELECT *
                FROM authors
                WHERE email=$1;
                `,

    createAuthor: `
                INSERT INTO authors(name,surname,email,image) 
                VALUES ($1,$2,$3,$4)`,

    updateAuthor: `
                UPDATE authors
                SET name=$1, surname=$2, email=$3, image=$4
                WHERE email=$5;`,

    deleteAuthors: `
                DELETE from authors
                WHERE email=$1;`,
}
module.exports = queries;