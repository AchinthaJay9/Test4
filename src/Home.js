// import { useState,useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = ()=>{

//   //  let name = 'mario';
//     // const [name,setName]=useState('mario')
//     // const [age, setAge]=useState(25);

//     const [blogs, setBlogs] = useState( null//[
//     //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     //  ]
//       );


//     // const handleClick =(e)=>{
//     //     console.log('hello, ninjas', e);
//     //     //name='luigi';
//     //     console.log(name);
//     //     setName('luigi');
//     //     setAge(30);


//     }
//     const handleClickAgain=(name, e) =>{
//         console.log('hello '+name, e.target);
//     }

//     const handleDelete = (id) =>{
//         const newBlogs =blogs.filter(blog=>blog.id !== id)
//         setBlogs(newBlogs);
//     }

//     useEffect(()=> {
//         fetch('http://localhost:8000/blogs')
//             .then(res =>{
//                 return res.json();
//             })
//             .then(data=>{
//                 console.log(data)
//             })

//     //     console.log('use effect run')
//     //     console.log(name)
//     // }, [name]);
//     }, []);

//     return ( 
//         <div className="home">
//             {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//             <BlogList blogs={blogs.filter((blog)=>blog.author=== 'mario')} title="Mario's Blogs" />
//             {blogs.map(blog => (
//         <div className="blog-preview" key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//             <p>{name} is {age}years old </p>
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(e)=>handleClickAgain('mario', e)}>Click me again</button>
//             <button onClick={()=> setName('luigi')}>change name</button>
//             <p>{name}</p>
//         </div>
//             ))} */}
//             </div>
//     );
// }
// export default Home;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;