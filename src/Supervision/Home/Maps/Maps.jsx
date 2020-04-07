import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import {googleMapsConfigs} from './Maps.configs';
import {
    Home,
    Print
} from '@material-ui/icons';
import {ReactComponent as Mask} from '../../../asserts/icons/mask.svg';
import {ReactComponent as Ventilator} from '../../../asserts/icons/ventilator.svg';
import {useSupervisionContext} from '../../Supervision.context';
import {retrieveEntries} from './Maps.request';

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
    let color = '';
    let icon = '';
    let lat = '';
    let lng = '';

    entries.forEach(entry => {
        if (entry.type.id === 1) {
            color = 'blue';
        }

        if (entry.type.id === 2) {
            color = 'green';
        }

        if (entry.type.id === 3) {
            color = 'orange';
        }

        if (entry.type.id === 4) {
            color = 'red';
        }

        if (entry.resource.id === 1) {
            icon = 'Print';
        }

        if (entry.resource.id === 2) {
            icon = 'Mask';
        }

        if (entry.resource.id === 3) {
            icon = 'Home';
        }

        if (entry.resource.id === 4) {
            icon = 'Ventilator';
        }

        lat = entry.commune.latitude;
        lng = entry.commune.longitude;

        let e;
        if (icon === 'Print') {
            e = <Print lat={lat} lng={lng} style={{fill: color}}/>;
        }

        if (icon === 'Mask') {
            e = <Mask lat={lat} lng={lng} style={{fill: color}}/>;
        }

        if (icon === 'Home') {
            e = <Home lat={lat} lng={lng} style={{fill: color}}/>;
        }

        if (icon === 'Ventilator') {
            e = <Ventilator lat={lat} lng={lng} style={{fill: color}}/>;
        }

        result.push(e);
    });

    return result;
};

const MapsCmp = ({classes}) => {
    const {mapsConfigs: {center, zoom}, token} = useSupervisionContext();
    const {defaultCenter, defaultZoom, defaultOptions, key} = googleMapsConfigs;
    const [entries, setEntries] = useState([]);

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
