import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import subNavbar from "../subNavbar/subNavBar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import "./App.css"

export default function App() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [filterInput, setFilterInput] = useState("")

  const onInputChange = (event) => {
    setFilterInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const transactionsRes = await axios.get("http://localhost:3001/bank/transactions")
        if (transactionsRes?.data?.transactions) {
          setTransactions(transactionsRes.data.transactions)
        }

        const transfersRes = await axios.get("http://localhost:3001/bank/transfers")
        if (transfersRes?.data?.transfers) {
          setTransfers(transfersRes.data.transfers)
        }
      } catch (err) {
        console.log({ err })
        setError(err)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const addTransaction = (newTransaction) => {
    setTransactions((transactions) => [...transactions, newTransaction])
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <main>
      <Navbar filterInput={filterInput} onInputChange={onInputChange} />
        <subNavbar />
        <Home />
      </main>
      </BrowserRouter>
    </div>
  )
}
