import { AppDispatch, RootState } from "@/redux-store/store"
import { useDispatch, useSelector } from "react-redux"

const useRedux = () => {
  const dispatch: AppDispatch = useDispatch()
  const app = useSelector((state: RootState) => state.app)

  return { app, dispatch }
}

export { useRedux }
