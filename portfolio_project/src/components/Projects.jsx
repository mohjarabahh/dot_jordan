function Card({ project }) {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md">
            <p className="h-4 w-full" style={{ backgroundColor: project.color }}></p>
            <div className="p-8">
                {project.link ? (
                    <a href={project.link} target="_blank" className="mt-1 block text-lg font-medium leading-tight text-black hover:text-indigo-500 hover:underline">
                        {project.name}
                    </a>
                ) : (
                    <p className="mt-1 block text-lg font-medium leading-tight text-black">{project.name}</p>
                )}
                <p className="mt-2 text-slate-500">{project.description}</p>
                <ul className="mt-5 flex gap-3">
                    {project.tools.map((item, idx) => (
                        <li key={idx}>
                            <img className="h-5 w-5" src={item.icon} title={item.name} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Projects({ data }) {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, idx) => (
                <Card key={idx} project={item} />
            ))}
        </div>
    )
}

export default Projects
