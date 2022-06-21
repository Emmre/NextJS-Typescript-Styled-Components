import axios from "axios"

export const getData = () => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.data)

  return data
}
