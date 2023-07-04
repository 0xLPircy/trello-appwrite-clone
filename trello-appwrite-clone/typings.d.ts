//structure based on the structure made in appwrite
interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    $id: string; //$ cause thats how you get from appwrite
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image; //? means avaklue can and cannot be there
}

interface Image {
    bucketId: string;
    fileId: string;

}