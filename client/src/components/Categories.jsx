import { motion } from 'framer-motion';
// import {useNavigate} from 'react-router-dom';
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

    // const navigate = useNavigate();

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-10 lg:px-20 py-10'>
                {eventCategories.map((category, index) => {
                    return (
                        <motion.div
                            key={index}
                            whileInView={{
                                opacity: [0, 1],
                                y: [-200, 0]
                            }}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}

                            className='flex flex-col justify-start px-5 py-6 gap-6 items-center rounded-2xl shadow-xl bg-gradient-to-t from-[#e9d4ff] to-[#dab0ff] cursor-pointer transition-all min-h-[220px]'
                        >
                            <h1 className='text-xl font-bold text-center'>{category.name}</h1>
                            <div className='flex gap-3 flex-wrap justify-center text-sm'>
                                {category.examples.map((example, i) => (
                                    <span key={i} className='px-3 py-1.5 bg-white rounded-2xl shadow text-gray-700'>{example}</span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>

    )
}

export default Categories