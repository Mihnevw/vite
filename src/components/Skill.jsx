

const skills = [
    {
        name: 'HTML5',
        icon: 'fab fa-html5',
        color: 'blue',
        proficiency: 90,
        level: 'Професионалист',
        gradient: 'from-blue-500 to-purple-600'
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        color: 'yellow',
        proficiency: 85,
        level: 'Напреднал',
        gradient: 'from-yellow-400 to-orange-500'
    },
    {
        name: 'React',
        icon: 'fab fa-react',
        color: 'pink',
        proficiency: 80,
        level: 'Комфортен',
        gradient: 'from-pink-500 to-red-500'
    },
    {
        name: 'Node.js',
        icon: 'fab fa-node-js',
        color: 'green',
        proficiency: 75,
        level: 'Средно ниво',
        gradient: 'from-green-400 to-emerald-600'
    }
];

const MySkills = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Моите Умения</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group bg-white rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div className="relative z-10">
                            <i className={`text-6xl text-${skill.color}-500 group-hover:text-white transition-colors duration-300 ${skill.icon}`}></i>
                            <h3 className="text-xl font-semibold mt-4 text-gray-800 group-hover:text-white">{skill.name}</h3>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-gray-600 group-hover:text-white">{skill.level}</span>
                                <span className={`text-sm font-bold text-${skill.color}-500 group-hover:text-white`}>{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div className={`bg-${skill.color}-500 h-2 rounded-full w-[${skill.proficiency}%] transition-all duration-500`}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MySkills;
