import React, {useState} from 'react'

const Form = ({newLocation})=>{
    const [city, setCity] = useState("")


    const query = (e)=>{
        e.preventDefault()
        console.log({city});
        // si la variable no contiene nada
        if(city==="" || !city) return;
        //recibimos la ciudad desde el water panel
        newLocation(city)
        
    }

    return(
        <div className='container mx-auto'>
            <form onSubmit={query}>
                <div className='input-group mb-2 mx-auto'>
                    <input type="text" className='bg-white shadow-md  w-6/12 rounded px-5 py-2.5 bg-gray-100 appearance-none border border-gray-200 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' placeholder='City,abrev' onChange={(e)=>setCity(e.target.value)}></input>
                    <button className='rounded bg-white text-red-300 border border-red-300 hover:bg-red-300 hover:text-white hover:border-transparent font-bold py-2 px-5 ml-5' type='submit'>
                        Buscar</button>
                </div>
            </form>
        </div>
    )

}

export default Form;