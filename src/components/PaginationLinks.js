import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  return (
    <Pagination aria-label="Page navigation" className="pagination-element">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous href={prevPage} />
        </PaginationItem>
      )}

      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`pageNumber${i + 1}`}>
            <PaginationLink href={`/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`pageNumber${i + 1}`}>
            <PaginationLink href={`/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href="#" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
