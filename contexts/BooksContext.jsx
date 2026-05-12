import { createContext, useState, useEffect } from "react"
import { tablesDB, client, realtime } from "../lib/appwrite"
import { ID, Permission, Query, Role} from "react-native-appwrite"
import { useUser } from "../app/hooks/useUser"

const DATABASE_ID = "69f60885002e3efa29e3"
const COLLECTION_ID = "books"

export const BooksContext = createContext()

export function BooksProvider({children}) {
    const [books, setBooks] = useState([])
    const {user} = useUser()

   async function fetchBooks() {
  try {
    if (!user) return

    const response = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID,
      queries: [
        Query.equal('userId', user.$id)
      ]
    })

    setBooks(response.rows)
    console.log(response.rows)

  } catch (error) {
    console.error(error)
  }
}

     async function fetchBookById(id)
    {
        try{

        } catch(error)
        {
            console.error(error.message)
        }
    }

   async function createBook(data) {
  try {
    console.log("USER:", user)

    const res = await tablesDB.createRow({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID,
      rowId: ID.unique(),
      data: { ...data, userId: user.$id },
      permissions: [ Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))]
    })

    console.log("SUCCESS:", res)

  } catch (error) {
    console.log("FULL ERROR:", JSON.stringify(error, null, 2))
  }
}

    async function deleteBook(id) {
        try{

        } catch(error){
            console.error(error.message)
        }
    }


useEffect(() => {
    let unsubscribe;

    async function setupRealtime() {
        try {
            console.log("👤 USER:", user);

            if (!user || !user.$id) {
                console.log("❌ No valid user");
                setBooks([]);
                return;
            }

            fetchBooks();

            const channel =
                `databases.${DATABASE_ID}.tables.${COLLECTION_ID}.rows.*`;

            console.log("📡 CHANNEL:", channel);

            unsubscribe = await realtime.subscribe(
                channel,
                (response) => {
                    console.log("📚 REALTIME EVENT:", response);

                    const { payload, events } = response;

                    if (events?.[0]?.includes("create")) {
                        setBooks((prevBooks) => [
                            ...prevBooks,
                            payload
                        ]);
                    }
                }
            );

            console.log("✅ SUBSCRIBED");
            console.log("🧪 unsubscribe type:", typeof unsubscribe);

        } catch (err) {
            console.error("❌ REALTIME ERROR:", err);
        }
    }

    setupRealtime();

    return () => {
    console.log("🧹 CLEANUP");

    if (typeof unsubscribe === "function") {
        unsubscribe();
    } else if (unsubscribe?.close) {
        unsubscribe.close();
    } else if (unsubscribe?.unsubscribe) {
        unsubscribe.unsubscribe();
    }
};

}, [user]);

    return(
        <BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}