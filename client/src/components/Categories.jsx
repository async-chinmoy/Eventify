import React from 'react'

const Categories = () => {

    const eventCategories = [
        {
            name: "Technical",
            examples: ["Hackathons", "Coding Contests", "Robotics", "Paper Presentations"]
        },
        {
            name: "Cultural",
            examples: ["Dance", "Drama", "Music", "Fashion Shows", "Fine Arts"]
        },
        {
            name: "Sports",
            examples: ["Cricket", "Football", "Athletics", "Badminton", "Chess"]
        },
        {
            name: "Workshops & Seminars",
            examples: ["AI Workshops", "UI/UX Design", "Entrepreneurship Talks"]
        },
        {
            name: "Literary",
            examples: ["Debates", "Quizzes", "Creative Writing", "JAM"]
        },
        {
            name: "Management",
            examples: ["Business Plans", "Mock Stock", "Marketing Games"]
        },
        {
            name: "Social Initiatives",
            examples: ["Blood Donation", "Cleanliness Drives", "Charity Events"]
        }
    ];

    return (
        <div>
            <div className='grid grid-cols-3 gap-5 px-30 py-10'>
                {eventCategories.map((category)=>{
                    return (
                        <div className='flex flex-col justify-start px-5 py-5 gap-10 items-center rounded-2xl shadow-xl bg-gradient-to-t from-[#e9d4ff] to-[#dab0ff]  cursor-pointer hover:scale-110 transition-all  h-50'>
                            <h1 className='text-2xl font-bold'>{category.name}</h1>
                            <div className='flex gap-3 flex-wrap text-sm'>
                                {category.examples.map((example)=>{
                                    return (
                                        <span className='px-3 py-2 bg-white rounded-2xl'>{example}</span>
                                    )  
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Categories