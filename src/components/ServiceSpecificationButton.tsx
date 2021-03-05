import React, { useContext } from 'react';
import AppContext, { DrawerType } from './AppContext';
import { Button } from 'gatsby-theme-material-ui';

export default function ServiceSpecificationButton() {
    const { setDrawerType } = useContext(AppContext)
    const onShowSpec = () => {
        setDrawerType(DrawerType.ServiceSpecification)
    }
    return (
        <Button aria-label="open Service Specification Language documentation" variant="outlined" onClick={onShowSpec}>Service Specification Language</Button>
    );
}
