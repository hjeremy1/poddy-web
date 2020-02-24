import React from "react";
import "./pagination.scss";
import { until } from "ramda";

export const Pagination = ({onNext, onPrevious, pageNumbers, activePage}) => {

  const noNeighborPage = neighborPage =>(
    neighborPage >= pageNumbers || neighborPage < 0 
  );

  return (
    <div className="pagination">
      <ul id="pageNumberList">
        <button onClick={onPrevious} className="button previous" disabled = {noNeighborPage(activePage-1)}>Prevous</button>
        <button className="button">{activePage + 1}</button>
        <button onClick={onNext} className="button next" disabled = {noNeighborPage(activePage+1)}>Next</button>
      </ul>
    </div>
  );
};
