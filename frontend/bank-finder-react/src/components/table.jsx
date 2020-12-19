import React from "react";
import { Table, Rating } from "semantic-ui-react";

const Tablex = ({ handleFavorites, list, status, favorites }) => {
  const blurONLoading = {
    filter: status === "fetching" ? "blur(8px)" : null,
  };

  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>IFSC</Table.HeaderCell>
          <Table.HeaderCell>Bank ID</Table.HeaderCell>
          <Table.HeaderCell>Bank</Table.HeaderCell>
          <Table.HeaderCell>Branch</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>District</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.HeaderCell>State</Table.HeaderCell>
          <Table.HeaderCell>Favorite</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {list &&
          list.map((branch, i) => (
            <Table.Row key={i}>
              <Table.Cell style={blurONLoading}>{branch.ifsc}</Table.Cell>
              <Table.Cell style={blurONLoading}>{branch.bank_id}</Table.Cell>
              <Table.Cell style={blurONLoading}>{branch.bank_name}</Table.Cell>
              <Table.Cell style={blurONLoading}>
                <div style={{ maxWidth: "200px" }}>{branch.branch}</div>
              </Table.Cell>
              <Table.Cell style={blurONLoading}>
                <div style={{ maxWidth: "300px" }}>{branch.address}</div>
              </Table.Cell>
              <Table.Cell style={blurONLoading}>{branch.district}</Table.Cell>
              <Table.Cell style={blurONLoading}>{branch.city}</Table.Cell>
              <Table.Cell style={blurONLoading}>{branch.state}</Table.Cell>
              <Table.Cell style={blurONLoading} textAlign="center">
                <Rating
                  icon="star"
                  rating={favorites[branch.ifsc] ? 1 : 0}
                  maxRating={1}
                  onRate={(e, d) =>
                    handleFavorites(branch.ifsc, d.rating, branch)
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default Tablex;
