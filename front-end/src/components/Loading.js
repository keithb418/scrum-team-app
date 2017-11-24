import React from "react"

import FontAwesome from "react-fontawesome";

const Loading = ({ isLoading }) =>
  isLoading &&
    <center>
      <FontAwesome
        name='refresh'
        size='4x'
        spin />
      <span className="sr-only">Loading...</span>
    </center>;

export default Loading;