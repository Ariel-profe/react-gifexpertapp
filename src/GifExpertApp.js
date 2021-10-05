import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

        // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        const [categories, setCategories] = useState(['Dragon Ball']);

        // const handleAdd = () => {
        //     setCategories( cats => [...cats, 'X-Men']);
        // }
    return (
        <>
        <h2> Gif Expert App</h2>
        <AddCategory setCategories={ setCategories }/> 
       <hr/>

       <ol>
           { 
            categories.map( category => (
                // return <li key={category}> {category}  </li>
                <GifGrid key={category} category={ category } />
            ))
           }
       </ol>
        </>
    )


}

export default GifExpertApp