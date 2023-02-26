export default function SingleProject (props) {
    return (
            <div className="singleProject">
                <h4>{props.project.title}</h4>
                <p>{props.project.image}</p>
            </div>
    )
}