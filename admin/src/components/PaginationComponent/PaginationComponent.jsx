
import ReactPaginate from "react-paginate";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./paginationComponent.css";

const PaginationComponent = (props) => {
    const { activenum, handleClick } = props;
    const forcePageActive = parseInt(activenum) - 1;
    const handlePageClick = (e) => {
        // console.log('hello', e.selected)
        let pageNo = parseInt(e.selected) + 1;
        handleClick(pageNo);
        window.scrollTo(0, 0);
    };

    return (
        <div className="paginationWap">
            <ReactPaginate
                previousLabel={<AiOutlineLeft />}
                nextLabel={<AiOutlineRight />}
                breakLabel={"..."}
                pageCount={30}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                renderOnZeroPageCount={null}
                forcePage={forcePageActive}
            />
        </div>
    );
};

export default PaginationComponent;
