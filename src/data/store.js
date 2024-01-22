import { reactive } from "vue";
export const store = reactive({
  apiUrl: "http://localhost:8000/api/",
  storageUploadsUrl: "http://localhost:8000/storage/uploads/",
  storageLogosUrl: "http://localhost:8000/storage/logos/",
  projects: [],
});
