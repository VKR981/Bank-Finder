import React from "react";
import { Pagination, Icon } from "semantic-ui-react";

const Paginationx = ({ data, status, activePage, setActivePage, PAGESIZE }) => {
  return (
    <Pagination
      disabled={status === "fetching"}
      inverted
      onPageChange={(e, d) => setActivePage(d.activePage)}
      activePage={activePage}
      ellipsisItem={{
        content: <Icon name="ellipsis horizontal" />,
        icon: true,
      }}
      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      totalPages={data.count ? Math.ceil(data.count / PAGESIZE) : 1}
    />
  );
};

export default Paginationx;
