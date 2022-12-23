import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={css.wrapper}>
      <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((event) => {
          <tr key={event.id}>
            <td>{event.type}</td>
            <td>{event.amount}</td>
            <td>{event.currency}</td>
          </tr>
      })}
      </tbody>;
    </table>
    </div>
    
   
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
