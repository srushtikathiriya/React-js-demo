import React, { useMemo, useState } from 'react'

const Counts = () => {
    const [count, setcount] = useState(0);
    const [item, setItem] = useState(10);

    //  function multiFun(){
    //   console.log("multiple time calling ")
    //     return count * 5 ;
    //  }

    const multiFunction = useMemo(
        function multiFun() {
            console.log("multiple time calling ")
            return count * 5;
        }, [count]
    )
    return (
        <div>
            <h1>HOOK - useMemo</h1>

            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Click Count</button>
            <br />

            {/* <h1>{multiFun()}</h1> */}
            <h1>{multiFunction}</h1>

            <br />
            <h1>{item}</h1>
            <button onClick={() => setItem(item * 10)}>Item</button>
        </div>
    )
}

export default Counts
