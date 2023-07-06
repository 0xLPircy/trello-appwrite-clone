import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );

    // console.log(data);

    const todos = data.documents;
    const columns = todos.reduce((acc, todo) => { //apparently acc racks up as we map through reduce and each gives a todo
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            // get image only if it exists
            ...(todo.image && { image: JSON.parse(todo.image) })
        })

        return acc;
    }, new Map<TypedColumn, Column>());

    console.log(columns)
};