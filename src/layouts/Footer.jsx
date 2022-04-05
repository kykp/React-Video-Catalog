
export function Footer () {
    let today = new Date();
    let year = today.getFullYear();
    return <div className="Footer">
        <h2>Copyright - {year}</h2>
    </div>
}