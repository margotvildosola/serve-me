import React, { PropTypes } from 'react';
import ServerConfig from './ServerConfig';

const ServerConfigList = ({ serverConfigs }) => (
    <ul>
        {serverConfigs.map(serverConfig =>
            <ServerConfig
                key={serverConfig.id}
                {...serverConfig}
            />,
        )}
    </ul>
)

ServerConfigList.propTypes = {
    serverConfigs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default ServerConfigList;