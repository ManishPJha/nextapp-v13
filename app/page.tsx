"use client";

import { useSelector } from "react-redux"
import { AppSelector } from "../redux/store"

const page = () => {

  const lifeSelector = useSelector((state: AppSelector) => state.life)
  
  return (
    <div>index page</div>
  )
}

export default page