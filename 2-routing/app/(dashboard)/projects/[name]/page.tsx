// dynamic routes here variable name is what your folder name inside [name]
const ProjectDetails = ({params}) => {
  return (
    <main className="text-3xl capitalize border-b-2 text-red-300">
        <h1>Project {params.name}</h1>
    </main>
  )
}

export default ProjectDetails