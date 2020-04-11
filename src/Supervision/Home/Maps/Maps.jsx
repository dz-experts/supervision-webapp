import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import {googleMapsConfigs} from './Maps.configs';
import {useSupervisionContext} from '../../Supervision.context';
import {retrieveEntries} from './Maps.request';
import {Marker} from './Marker';

const styles = () => ({
    googleMaps: {
        width: '100%', height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
    }
});

const adapter = entries => {
    const result = [];

    entries.forEach(entry => {
        const lat = entry.commune.latitude;
        const lng = entry.commune.longitude;

        result.push(<Marker lat={lat} lng={lng} entry={entry}/>);
    });

    return result;
};

const MapsCmp = ({classes}) => {
    const {mapsConfigs: {center, zoom}, token, entries, setEntries} = useSupervisionContext();
    const {defaultCenter, defaultZoom, defaultOptions, key} = googleMapsConfigs;

    useEffect(() => {
        const retrieveData = async () => {
            setEntries(await retrieveEntries(token));
        };

        retrieveData();
    }, token);

    return (
        <div className={classes.googleMaps}>
            <GoogleMapReact
                bootstrapURLKeys={key}
                center={center}
                zoom={zoom}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                options={defaultOptions}
                // TODO: remove workaround for issue: https://github.com/google-map-react/google-map-react/issues/677
                distanceToMouse={() => {}}
            >
                {adapter(entries).map(entry => entry)}
            </GoogleMapReact>
        </div>
    );
};

MapsCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Maps = withStyles(styles)(MapsCmp);
