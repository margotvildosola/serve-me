import React, { PropTypes } from 'react';

const ServerConfig = () => (
    <div>
        ${this.props.name}
    </div>
);

ServerConfig.propTypes = {
    name: PropTypes.string.isRequired,
    ipOrigin: PropTypes.string.isRequired,
    sourceTarget: PropTypes.string.isRequired,
};

export default ServerConfig;