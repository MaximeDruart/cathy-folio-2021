import React, { useEffect } from "react"
import { useHistory } from "react-router"
import luge from "@waaark/luge"

const App = ({ children }) => {
  let history = useHistory()
  useEffect(() => {
    history.listen(() => {
      luge.lifecycle.refresh()
    })
  }, [])
  return <div>{children}</div>
}

export default App
