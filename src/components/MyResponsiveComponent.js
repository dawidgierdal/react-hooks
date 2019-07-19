import React from 'react';
import { useWindowWidth } from "./useWindowWidth";

export const MyResponsiveComponent = () => (
    <div>
        Window width is {useWindowWidth()}
    </div>
);