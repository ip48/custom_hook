import React from 'react'
import UseFetch from './UseFetch';


const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
  return (
    <>
        <ul className='list_data_main'>
            {data && data.map((elm, index)=>(
                <>
                    <li>
                        <h3>{index}) {elm.name} </h3>
                        <p><strong>Benefits: </strong>{elm.benefits}</p>
                        <p><strong>Duration: </strong>{elm.time_duration}</p>
                    </li>
                </>
            ))
            }

        </ul>

     
    </>
  )
}

export default FetchYogaData