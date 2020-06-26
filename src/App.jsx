import React, { useState } from "react"
import Layout, { ResultsList, Welcome } from "./Layout"
import ResultCard from "./ResultCard"
import SearchBar from "./SearchBar"

let host = process.env.REACT_APP_API_HOST || "https://outpost-api-service.herokuapp.com"

const App = () => {

  const [welcome, setWelcome] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [postcode, setPostcode] = useState("")
  const [category, setCategory] = useState("childminders")

  const search = async () => {
    setWelcome(false)
    setLoading(true)
    const res = await fetch(`${host}/api/v1/services?location=${postcode}&taxonomies=childcare-and-early-years&taxonomies=${category}`)
    const data = await res.json()
    setResults(data.content)
    setLoading(false)
  }

  return(
    <Layout>
      {console.log(loading)}
      <SearchBar
        postcode={postcode}
        setPostcode={setPostcode}
        category={category}
        setCategory={setCategory}
        onSubmit={search}
      />
      {loading ?
        <p>Loading...</p>
        :
        results.length > 0 ?
          <>
            <p>Showing results near you</p>
            <ResultsList>
              {results.map(result =>
                <ResultCard {...result} key={result.id}/>
              )}
            </ResultsList>
          </>
          :
          welcome ?
            <p>No results</p>
            :
            <Welcome>Start by typing your postcode</Welcome>
      }
    </Layout>
  )
}


export default App