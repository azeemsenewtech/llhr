import React from 'react';
import DashboardStats from './feacture/documentStatus';
import DocumentList from './feacture/documentList';

const DocumentPage = () => {
    return (
        <div>
            <DashboardStats/>
            <DocumentList/>
        </div>
    );
}

export default DocumentPage;
