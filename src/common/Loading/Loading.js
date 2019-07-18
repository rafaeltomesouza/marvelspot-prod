import React from 'react';
import ReactLoading from "react-loading";
import './styles/_loading.scss';

function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="spin" color="#fff" />
    </div>
  )
}

export default Loading;