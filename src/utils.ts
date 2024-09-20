type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  dateByCreate: number;
  dateByEdit: number;
};

const TEMP_DB_NAME = "dgdgDB";

const enum STORE_KEY {
  POSTS = "posts",
  LINKS = "links",
}

const initObjectStore = (storeKey: STORE_KEY) => (db: IDBDatabase) => {
  if (db.objectStoreNames.contains(storeKey)) return;
  const objectStore = db.createObjectStore(storeKey, { keyPath: "id", autoIncrement: true });
  objectStore.createIndex("title", "title", { unique: false });
};

const openDB = (upgradeCallback?: (db: IDBDatabase) => void): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(TEMP_DB_NAME, 1);

    request.onupgradeneeded = (e) => {
      if (upgradeCallback) upgradeCallback((e.target as IDBOpenDBRequest).result);
      console.log("on upgrade needed");
    };
    request.onsuccess = (e) => resolve((e.target as IDBOpenDBRequest).result);
    request.onerror = (e) => reject((e.target as IDBOpenDBRequest)?.error);
  });

const addData = (db: IDBDatabase, storeKey: STORE_KEY, data: Record<PropertyKey, unknown>) =>
  new Promise((resolve, reject) => {
    console.log("adddata 몇 번 호출되지", data);
    const transaction = db.transaction([storeKey], "readwrite");
    const store = transaction.objectStore(storeKey);
    const request = store.add(data);

    request.onsuccess = (e) => resolve((e.target as IDBRequest).result);
    request.onerror = (e) => reject(e.target);
  });

const getAllData = (db: IDBDatabase, storeKey: STORE_KEY): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeKey], "readonly");
    const store = transaction.objectStore(storeKey);
    const request = store.getAll();

    request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
    request.onerror = (event) => reject(event);
  });

const getData = (
  params:
    | {
        db: IDBDatabase;
        storeKey: STORE_KEY;
        primaryKey: IDBValidKey | IDBKeyRange;
      }
    | {
        db: IDBDatabase;
        storeKey: STORE_KEY;
        indexKey: string;
        indexValue: IDBValidKey | IDBKeyRange;
      },
): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const { db, storeKey } = params;
    const transaction = db.transaction([storeKey], "readonly");
    const store = transaction.objectStore(storeKey);

    const request =
      "primaryKey" in params ? store.get(params.primaryKey) : store.index(params.indexKey).get(params.indexValue);

    request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
    request.onerror = (event) => reject(event);
  });

const updateData = (db: IDBDatabase, storeKey: STORE_KEY, data: Record<PropertyKey, unknown>): Promise<boolean> =>
  new Promise((resolve, reject) => {
    console.log("update 몇 번 호출되지", data);
    const transaction = db.transaction([storeKey], "readwrite");
    const store = transaction.objectStore(storeKey);
    const request = store.put(data);

    request.onsuccess = () => resolve(true);
    request.onerror = (event) => reject(event);
  });

const deleteData = (db: IDBDatabase, storeKey: STORE_KEY, query: IDBValidKey | IDBKeyRange) =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeKey], "readwrite");
    const store = transaction.objectStore(storeKey);
    const request = store.delete(query);

    request.onsuccess = () => resolve(true);
    request.onerror = (event) => reject(event);
  });

// TODO: 성능을 위해 post의 content만 따로 저장하는 objectStore를 생성해서 관리하자

const isPost = (data: unknown): data is Post =>
  data != null &&
  typeof data == "object" &&
  "id" in data &&
  "title" in data &&
  "image" in data &&
  "content" in data &&
  "dateByCreate" in data &&
  "dateByEdit" in data;

const addPost = async (data: Omit<Post, "id">): Promise<Post> => {
  const db = await openDB();
  const id = (await addData(db, STORE_KEY.POSTS, data)) as number;
  return { ...data, id };
};

const getPostList = async () => {
  const db = await openDB(initObjectStore(STORE_KEY.POSTS));
  const posts = (await getAllData(db, STORE_KEY.POSTS)) as unknown as Post[];
  if (!Array.isArray(posts) || !posts.some(isPost)) {
    console.error("Type Error: check data or 'isPost' fn");
    return [];
  }
  return posts;
};

const getPost = async (data: { id: number } | { title: string }) => {
  const db = await openDB(initObjectStore(STORE_KEY.POSTS));
  const post =
    "id" in data
      ? ((await getData({
          db,
          storeKey: STORE_KEY.POSTS,
          primaryKey: data.id,
        })) as unknown as Post)
      : ((await getData({
          db,
          storeKey: STORE_KEY.POSTS,
          indexKey: "title",
          indexValue: data.title,
        })) as unknown as Post);

  if (!isPost(post)) throw Error("Type Error: check data or 'isPost' fn");

  return post;
};

const getVoidPost = (post?: Partial<Omit<Post, "id" | "dateByCreate">>) =>
  ({
    content: post?.content || "",
    dateByCreate: Date.now(),
    dateByEdit: post?.dateByEdit || 0,
    image: post?.image || "",
    title: post?.title || "",
  }) satisfies Omit<Post, "id">;

const updatePost = (data: Post) =>
  openDB().then((db) => updateData(db, STORE_KEY.POSTS, { ...data, dateByEdit: Date.now() } satisfies Post));

const deletePost = (id: number) => openDB().then((db) => deleteData(db, STORE_KEY.POSTS, id));

const formatDate = (date: number) =>
  new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(date));

const convertImgToBase64 = async (imagePath: string): Promise<string> => {
  const response = await fetch(imagePath);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export {
  // constants
  STORE_KEY,

  // post functions
  addPost,
  getPost,
  getPostList,
  getVoidPost,
  updatePost,
  deletePost,

  // util functions
  formatDate,
  convertImgToBase64,
};

export type { Post };
