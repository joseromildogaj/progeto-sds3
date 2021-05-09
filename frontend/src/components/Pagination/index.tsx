import { SalePage } from "Types/sale"

type Props = {
    page: SalePage;
    onPageCharge: Function
}

const Pagination = ({ page, onPageCharge } : Props) => {
    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageCharge(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className= {`page-item ${page.last ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageCharge(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination