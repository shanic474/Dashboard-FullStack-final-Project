import { Outlet } from 'react-router-dom';

import ToastProvider from '../ui/ToastProvider.jsx';


function Layout() {
    return (
        <>
        <Outlet />
        <ToastProvider />
        </>
    );
}

export default Layout
