import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    let setCategory = props.setCategory;

    const [liked,setLiked] = useState([]);


    function getCourses() {

        if (category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(course => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else 
        {
            return courses[category];
        }
    }    


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    
        {
            getCourses().map( (course) => (
                <Card key={course.id} course={course} liked={liked} setLiked={setLiked}></Card>
            ))
        }

    </div>
  )
}

export default Cards;