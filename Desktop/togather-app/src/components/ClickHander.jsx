

function ClickHander() {
    const items = [
        "kigali",
        "nsabi",
        "nyaxo",
        "mitsutsu",
        "visa",
        "usa",
    ]
    let trend = "";
    const SelectedIndex = 0;
    const newspaper = 200;
    const priceOfPrice = 1500
    const totalSumOfConsumed = newspaper* priceOfPrice;
    
       
  return (
    <div>
        {trend.length === 0 ? <p>helloooooo</p> : <h1>temp</h1>}
    {<ul className='ClickButton'>
     {items.map(item => <li className = "hello" key={item} onClick={(item) =>console.log(" list clicked !!!!!")}>{item}</li>)}
     {totalSumOfConsumed > 200000 ? <p>they have spend much money</p> : <p> they have spending less money</p>}
     {<p>{totalSumOfConsumed}</p>}

    </ul>}
    </div>
  )
}

export default ClickHander;