import { proceedLogout, store } from "@/redux-store/store"
import axios from "axios"

export const SERVER = process.env.NEXT_PUBLIC_API_URL

const axiosApi = axios.create({
  baseURL: SERVER,
  timeout: 240000,
  withCredentials: true,
})

axiosApi.interceptors.request.use((config) => {
  return config
})

axiosApi.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      const { status } = error.response
      if (status === 401) {
        store.dispatch(
          proceedLogout({
            onSuccess: () => {
              window.location.href = "/login"
            },
            onError: () => {},
          })
        )
      }
    }
    return Promise.reject(error)
  }
)

const getHeaders = () => {
  return {}
  /**
   * get value
   */
  // const token = store.getState().app.token

  // try {
  //   if (token) {
  //     return { Authorization: "Token " + token }
  //   } else {
  //     return {}
  //   }
  // } catch {
  //   return {}
  // }
}

export async function get(url: string, config: object) {
  const response = await axiosApi.get(url, {
    ...config,
    headers: getHeaders(),
  })
  return response.data
}

export async function post(url: string, data: object, config: object) {
  const headers = { ...getHeaders() }
  const response = await axiosApi.post(url, data, {
    ...config,
    headers,
  })
  return response.data
}
