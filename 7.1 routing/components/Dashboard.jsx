function Dashboard() {
    const [loading, setLoading] = useState(true)
    console.log("A")
    useEffect(()=>{
      console.log("B")
  
      setLoading(true)
      console.log("C")
  
    }, [loading])
    console.log("D")
  
    if(loading) {
  
    }
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard