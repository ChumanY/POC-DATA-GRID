import React from "react";
import { useDataGrid, List } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IPost {
    id: number;
    title: string;

}

export const PostsList: React.FC = () => {
    const { dataGridProps, setFilters } = useDataGrid({
        resource: "posts",
    });
        const columns = React.useMemo<GridColDef<IPost>[]>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
                width: 75,
            },
            { field: "title", headerName: "Title", minWidth: 400, flex: 1 },

        ],
        [],
    );


    const {
        paginationMode,
        paginationModel,
        onPaginationModelChange,
        sortingMode,
        sortModel,
        onSortModelChange,
        filterMode,
        filterModel,
        onFilterModelChange,
        ...restDataGridProps
    } = dataGridProps;  

    return (
        <List>
            <DataGrid
                columns={columns}
                {...restDataGridProps}
                paginationMode={paginationMode}
                paginationModel={paginationModel}
                onPaginationModelChange={onPaginationModelChange}
                sortingMode={sortingMode}
                sortModel={sortModel}
                onSortModelChange={onSortModelChange}
                filterMode={filterMode}
                filterModel={filterModel}
                onFilterModelChange={onFilterModelChange}
                autoHeight
            />
        </List>
    );
};